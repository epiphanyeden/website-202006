import * as React from "react"
import * as styles from "./pledge2026.module.css"

function encode(data) {
  return new URLSearchParams(data).toString()
}

export default function PledgeForm() {
  const [status, setStatus] = React.useState("idle")
  const [values, setValues] = React.useState(null) // will hold submitted fields
  const [error, setError] = React.useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setError(null)

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    // 1) Save values for thank-you view
    setValues(data)

    try {
      // 2) Post to Netlify so submission is stored
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": form.getAttribute("name"), ...data }),
      })

      // 3) Only now flip to success view
      setStatus("success")
    } catch (err) {
      setError("Sorry—something went wrong.")
      console.error(err)
    }
  }

  if (status === "success" && values) {
    const name = values.name?.trim()
    const amount = values.amount ? Number(values.amount).toFixed(2) : null
    const period = values.period
    return (
      <div role="status" aria-live="polite" className={styles.text}>
        <h2>Thank you{name ? `, ${name}` : ""}!</h2>
        <p>
          We received your pledge
          {amount ? ` of $${amount}` : ""}
          {period ? ` per ${period}` : ""}. We appreciate your support.
        </p>
      </div>
    )
  }
  return (
    <section id="pledge" className={styles.container}>
      <form
        name="tithe-pledge"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        noValidate
        className={styles.form}
      >
        <h2>Your Pledge for 2026</h2>
        {/* Netlify needs this hidden field even with fetch */}
        <input type="hidden" name="form-name" value="tithe-pledge" />

        {/* Honeypot to cut spam */}
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out: <input name="bot-field" />
          </label>
        </p>

        <p>
          <label>
            Name{" "}
            <input
              type="text"
              name="name"
              required
              className={styles.textInput}
              id="name"
              placeholder="Your Name(s)"
            />
          </label>
        </p>
        <p>
          <label>
            Email{" "}
            <input
              type="email"
              name="email"
              required
              className={styles.textInput}
              id="email"
              placeholder="Your Email"
            />
          </label>
        </p>
        <p>
          <label>
            Amount{" "}
            <input
              type="number"
              name="amount"
              className={`${styles.textInput} ${styles.amountInput}`}
              required
              min="1"
              step="1"
              id="Amount"
              placeholder="Amount"
            />
          </label>
          <span className={styles.perText}> per </span>
          {/* </p>
      <p> */}
          <label>
            {" "}
            <select
              name="period"
              className={`${styles.textInput} ${styles.periodSelect}`}
              id="Period"
              required
            >
              <option>week</option>
              <option>month</option>
              <option>year</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Comment{" "}
            <textarea
              name="comment"
              type="text"
              id="donorComment"
              placeholder="Comments"
              className={styles.textInput}
            />
          </label>
        </p>

        <button
          type="submit"
          disabled={status === "sending"}
          value="Submit Pledge"
          className={styles.button}
        >
          {status === "sending" ? "Submitting…" : "Submit Pledge"}
        </button>
        <p className={styles.formText}>Other Ways to Pledge:</p>
        <ol className={styles.formText}>
          <li>
            Email pledge@epiphanyeden.org with your name and pledge amount.
          </li>
          <li>
            Mail a pledge to the church. You just need to provide your name and
            the pledge amount. No form is needed.
          </li>
          <li>
            Put a pledge in the collection plate. You just need to provide your
            name and the pledge amount. A form will be available at the church
            if needed or preferred.
          </li>
        </ol>

        <div aria-live="polite">{error && <p role="alert">{error}</p>}</div>

        {/* Progressive enhancement fallback if JS is disabled */}
        <noscript>
          <p>
            JavaScript is off—submitting will navigate to our thank-you page.
            <input type="hidden" name="action" value="/thank-you/" />
          </p>
        </noscript>
      </form>
    </section>
  )
}
