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

function fmtMoney(v) {
  const n = Number(v)
  return Number.isFinite(n) ? n.toFixed(2) : v
}

function annualize(amount, period) {
  const n = Number(amount)
  if (!Number.isFinite(n)) return null
  const map = { week: 52, month: 12, year: 1 }
  const m = map[String(period || "").toLowerCase()]
  if (!m) return null
  return n * m
}

exports.handler = async event => {
  const ok = msg => ({ statusCode: 200, body: msg })
  try {
    const { payload } = JSON.parse(event.body || "{}")
    if (payload?.form_name !== "tithe-pledge")
      return ok("Ignoring non tithe-pledge form")
    if (payload?.data?.["bot-field"]) return ok("Spam skipped")

    const d = payload?.data || {}
    const submittedAt = payload?.created_at || new Date().toISOString()

    const submitterEmail =
      typeof d.email === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email)
        ? d.email.trim()
        : null

    const amt = d.amount ? Number(d.amount) : null
    const ann = annualize(amt, d.period)

    // --- ADMIN (plain text) ---
    const adminLines = [
      "New pledge received",
      d.name ? `Name: ${d.name}` : null,
      submitterEmail ? `Email: ${submitterEmail}` : null,
      d.amount ? `Amount: $${fmtMoney(d.amount)}` : null,
      d.period ? `Period: ${d.period}` : null,
      // Annualized shown ONLY to admin:
      ann != null ? `Annualized: $${fmtMoney(ann)} per year` : null,
      d.comment ? `Comment: ${d.comment}` : null,
      `Submitted at: ${submittedAt}`,
    ]
      .filter(Boolean)
      .join("\n")
    console.log("adminLines:", adminLines)
    // --- USER (plain text + HTML; no annualized figure) ---
    const userTextLines = [
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
    ].filter(Boolean)

    const userText = userTextLines.join("\n")

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

    // SMTP transporter (Titan)
    const nodemailer = require("nodemailer")
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.titan.email",
      port: Number(process.env.SMTP_PORT || 587),
      secure: (process.env.SMTP_SECURE || "false") === "true", // true for 465
      auth: {
        user: process.env.SMTP_USER, // e.g. pledge@epiphanyeden.org
        pass: process.env.SMTP_PASS,
      },
    })

    // Send admin notification (includes annualized figure)
    if (process.env.MAIL_TO) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: process.env.MAIL_TO, // e.g. pledge@epiphanyeden.org
        subject:
          process.env.MAIL_SUBJECT_ADMIN || "New pledge submission received",
        text: adminLines,
        replyTo: submitterEmail || undefined,
      })
    }

    // Send confirmation to the submitter (no annualized figure)
    if (submitterEmail) {
      await transporter.sendMail({
        from: process.env.MAIL_FROM || process.env.SMTP_USER,
        to: submitterEmail,
        subject:
          process.env.MAIL_SUBJECT_USER ||
          "Thank you — we received your pledge",
        text: userText,
        html: userHtml,
      })
    }

    return ok("Recorded; emails sent (where applicable).")
  } catch (e) {
    console.error("submission-created error:", e)
    return ok("Recorded; email send failed (see logs).")
  }
}
