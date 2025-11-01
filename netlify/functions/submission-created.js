// netlify/functions/submission-created.js
const nodemailer = require("nodemailer")

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;")
}
const fmtMoney = v => (Number.isFinite(Number(v)) ? Number(v).toFixed(2) : v)
const annualize = (amount, period) => {
  const n = Number(amount)
  if (!Number.isFinite(n)) return null
  const map = { week: 52, month: 12, year: 1 }
  const m = map[String(period || "").toLowerCase()]
  return m ? n * m : null
}

exports.handler = async event => {
  const ok = msg => ({ statusCode: 200, body: msg })

  try {
    const { payload } = JSON.parse(event.body || "{}")
    console.log(
      "[submission-created] Received payload keys:",
      Object.keys(payload || {})
    )
    console.log("[submission-created] form_name:", payload?.form_name)
    console.log("[submission-created] created_at:", payload?.created_at)

    if (payload?.data?.["bot-field"]) {
      console.warn("[submission-created] Honeypot filled; skipping.")
      return ok("Spam skipped")
    }

    if (payload?.form_name !== "tithe-pledge") {
      console.warn("[submission-created] Ignoring form:", payload?.form_name)
      return ok(`Ignoring form: ${payload?.form_name}`)
    }

    const d = payload?.data || {}
    const submittedAt = payload?.created_at || new Date().toISOString()

    const submitterEmail =
      typeof d.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)
        ? d.email.trim()
        : null

    const amt = d.amount ? Number(d.amount) : null
    const ann = annualize(amt, d.period)

    // Build bodies
    const adminText = [
      "New pledge received",
      d.name ? `Name: ${d.name}` : null,
      submitterEmail ? `Email: ${submitterEmail}` : null,
      d.amount ? `Amount: $${fmtMoney(d.amount)}` : null,
      d.period ? `Period: ${d.period}` : null,
      ann != null ? `Annualized: $${fmtMoney(ann)} per year` : null,
      d.comment ? `Comment: ${d.comment}` : null,
      `Submitted at: ${submittedAt}`,
    ]
      .filter(Boolean)
      .join("\n")

    const userText = [
      d.name ? `Hi ${d.name},` : "Hi,",
      "",
      "Thank you! We received your pledge. Here are the details we recorded:",
      d.amount ? `• Amount: $${fmtMoney(d.amount)}` : null,
      d.period ? `• Period: ${d.period}` : null,
      submitterEmail ? `• Email: ${submitterEmail}` : null,
      d.comment ? `• Comment: ${d.comment}` : null,
      "",
      "If anything looks off, reply to this email and we’ll fix it.",
      "",
      "— Church of the Epiphany",
    ]
      .filter(Boolean)
      .join("\n")

    const userHtml = `
      <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.4">
        <p>${d.name ? `Hi ${escapeHtml(d.name)},` : "Hi,"}</p>
        <p>Thank you! We received your pledge. Here are the details we recorded:</p>
        <table role="presentation" cellpadding="0" cellspacing="0" style="border-collapse:collapse">
          ${
            d.amount
              ? `<tr><td style="padding:2px 8px 2px 0"><strong>Amount:</strong></td><td>$${escapeHtml(
                  fmtMoney(d.amount)
                )}</td></tr>`
              : ""
          }
          ${
            d.period
              ? `<tr><td style="padding:2px 8px 2px 0"><strong>Period:</strong></td><td>${escapeHtml(
                  d.period
                )}</td></tr>`
              : ""
          }
          ${
            submitterEmail
              ? `<tr><td style="padding:2px 8px 2px 0"><strong>Email:</strong></td><td>${escapeHtml(
                  submitterEmail
                )}</td></tr>`
              : ""
          }
          ${
            d.comment
              ? `<tr><td style="padding:2px 8px 2px 0"><strong>Comment:</strong></td><td>${escapeHtml(
                  d.comment
                )}</td></tr>`
              : ""
          }
          <tr><td style="padding:2px 8px 2px 0"><strong>Submitted:</strong></td><td>${escapeHtml(
            submittedAt
          )}</td></tr>
        </table>
        <p style="margin-top:12px">If anything looks off, reply to this email and we’ll fix it.</p>
        <p>— Church of the Epiphany</p>
      </div>
    `

    // SMTP config
    const host = process.env.SMTP_HOST || "smtp.titan.email"
    const port = Number(process.env.SMTP_PORT || 587)
    const secure = (process.env.SMTP_SECURE || "false") === "true" // true => 465
    const user = process.env.SMTP_USER
    const pass = process.env.SMTP_PASS
    const from = process.env.MAIL_FROM || user
    const adminTo = process.env.MAIL_TO

    console.log("[submission-created] SMTP settings:", {
      host,
      port,
      secure,
      from,
      user,
      pass,
      adminToSet: !!adminTo,
    })

    if (!user || !pass) {
      console.error(
        "[submission-created] Missing SMTP_USER or SMTP_PASS env vars."
      )
      return ok("Recorded; missing SMTP credentials")
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user: user, pass: pass },
      authMethod: "LOGIN", // <-- force LOGIN instead of PLAIN
      requireTLS: true,
      // enable nodemailer internal logs for this debug run:
      logger: true,
      debug: true,
    })

    // Verify SMTP (will log details if something’s off)
    try {
      await transporter.verify()
      console.log("[submission-created] SMTP verify: OK")
    } catch (e) {
      console.error("[submission-created] SMTP verify FAILED:", e)
      return ok("Recorded; SMTP verify failed")
    }

    // Send admin email
    if (adminTo) {
      try {
        const infoAdmin = await transporter.sendMail({
          from,
          to: adminTo, // e.g., pledge@epiphanyeden.org
          subject:
            process.env.MAIL_SUBJECT_ADMIN || "New pledge submission received",
          text: adminText,
          replyTo: submitterEmail || undefined,
        })
        console.log(
          "[submission-created] Admin mail sent:",
          infoAdmin.messageId
        )
      } catch (e) {
        console.error("[submission-created] Admin mail FAILED:", e)
      }
    } else {
      console.warn(
        "[submission-created] MAIL_TO not set; skipping admin email."
      )
    }

    // Send confirmation to submitter
    if (submitterEmail) {
      try {
        const infoUser = await transporter.sendMail({
          from,
          to: submitterEmail,
          subject:
            process.env.MAIL_SUBJECT_USER ||
            "Thank you — we received your pledge",
          text: userText,
          html: userHtml,
        })
        console.log("[submission-created] User mail sent:", infoUser.messageId)
      } catch (e) {
        console.error("[submission-created] User mail FAILED:", e)
      }
    } else {
      console.warn(
        "[submission-created] No valid submitter email; skipping user email."
      )
    }

    return ok("Recorded; attempted emails (see logs).")
  } catch (e) {
    console.error("[submission-created] Top-level error:", e)
    return ok("Recorded; email send failed (see logs).")
  }
}
