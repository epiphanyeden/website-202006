import * as React from "react";

function encode(data) {
  return new URLSearchParams(data).toString();
}

export default function PledgeForm() {
  const [status, setStatus] = React.useState("idle"); // idle | sending | success | error
  const [error, setError] = React.useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const fd = new FormData(form);
    fd.append("form-name", "tithe-pledge"); // REQUIRED for Netlify

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(Object.fromEntries(fd)),
      });
      form.reset();
      setStatus("success");
    } catch (err) {
      console.error(err);
      setError("Sorry—something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div role="status" aria-live="polite">
        <h2>Thank you!</h2>
        <p>Your pledge was received. We appreciate your support.</p>
      </div>
    );
  }

  return (
    <form
      name="tithe-pledge"
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
    >
      {/* Netlify needs this hidden field even with fetch */}
      <input type="hidden" name="form-name" value="tithe-pledge" />

      {/* Honeypot to cut spam */}
      <p style={{ display: "none" }}>
        <label>Don’t fill this out: <input name="bot-field" /></label>
      </p>

      <p><label>Name <input type="text" name="name" required /></label></p>
      <p><label>Email <input type="email" name="email" /></label></p>
      <p><label>Amount <input type="number" name="amount" required /></label></p>
      <p>
        <label>Period
          <select name="period" required>
            <option>week</option><option>month</option><option>year</option>
          </select>
        </label>
      </p>
      <p><label>Comment <textarea name="comment" /></label></p>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Submitting…" : "Submit"}
      </button>

      <div aria-live="polite">{error && <p role="alert">{error}</p>}</div>

      {/* Progressive enhancement fallback if JS is disabled */}
      <noscript>
        <p>
          JavaScript is off—submitting will navigate to our thank-you page.
          <input type="hidden" name="action" value="/thank-you/" />
        </p>
      </noscript>
    </form>
  );
}
