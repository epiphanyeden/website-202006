import * as React from "react"
import * as styles from "./pledge2026.module.css"

function encode(data) {
  return new URLSearchParams(data).toString()
}

export default function PledgeForm() {
  const [status, setStatus] = React.useState("idle") // idle | sending | success | error
  const [error, setError] = React.useState("")

  const onSubmit = async e => {
    e.preventDefault()
    if (status === "sending") return
    setStatus("sending")
    setError("")

    const form = e.currentTarget
    const fd = new FormData(form)
    fd.append("form-name", "tithe-pledge") // REQUIRED for Netlify

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(fd)),
      })
      form.reset()
      setStatus("success")
    } catch (err) {
      console.error(err)
      setError("Sorry—something went wrong. Please try again.")
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Thank you!</h2>
        <p>Your pledge was received. We appreciate your support.</p>
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
        onSubmit={onSubmit}
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
            {/* , but you can{" "}
                <a href={PledgeForm} target="blank">
                  {" "}
                  download a form here
                </a>{" "}
                if you prefer. */}
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
