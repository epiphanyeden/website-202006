import React, { useState } from "react"
import * as styles from "./gift2024.module.css"
// import PledgeForm from "../../content/assets/PledgeFormOnline.pdf"
import { StaticImage } from "gatsby-plugin-image"
// import EstimateProgressBar from "./estimateProgressBar"

import {
  EMAILJS_USER,
  EMAILJS_SERVICE,
  EMAILJS_TEMPLATEID,
} from "gatsby-env-variables"
import emailjs from "emailjs-com"
import { init } from "emailjs-com"

init(EMAILJS_USER)

const Gift = ({ env }) => {
  const [donorName, setDonorName] = useState("")
  const [donorEmail, setDonorEmail] = useState("")
  const [donorAmount, setDonorAmount] = useState("")
  const [donorPeriod, setDonorPeriod] = useState("") // Add this line
  const [donorComment, setDonorComment] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formSubmitSuccessful, setFormSubmitSuccessful] = useState(false)
  const [donorAnnualAmount, setdonorAnnualAmount] = useState(0)

  const handleNameChange = event => {
    setDonorName(event.target.value)
  }
  const handleEmailChange = event => {
    setDonorEmail(event.target.value)
  }
  const handleAmountChange = event => {
    const newAmount = event.target.value
    setDonorAmount(newAmount)
    setdonorAnnualAmount(calculatedonorAnnualAmount(newAmount, donorPeriod))
  }

  const handlePeriodChange = event => {
    const newPeriod = event.target.value
    setDonorPeriod(newPeriod)
    setdonorAnnualAmount(calculatedonorAnnualAmount(donorAmount, newPeriod))
  }

  const handleCommentChange = event => {
    setDonorComment(event.target.value)
  }

  const calculatedonorAnnualAmount = (amount, period) => {
    const numAmount = parseFloat(amount)
    if (isNaN(numAmount)) return 0

    switch (period) {
      case "week":
        return numAmount * 52
      case "month":
        return numAmount * 12
      case "year":
        return numAmount
      default:
        return 0
    }
  }

  const handleSubmit = event => {
    event.preventDefault()

    const serviceID = EMAILJS_SERVICE
    const templateID = EMAILJS_TEMPLATEID
    const templateParams = {
      donorName,
      donorEmail,
      donorAmount,
      donorPeriod, // Add this line
      donorAnnualAmount, // Add this line
      donorComment,
    }

    sendEmail(serviceID, templateID, templateParams)

    setFormSubmitted(true)
  }

  const sendEmail = (serviceID, templateID, templateParams) => {
    console.log("in Send: ", serviceID, templateID, templateParams)
    emailjs
      .send(serviceID, templateID, templateParams)
      .then(res => {
        if (res.status === 200) {
          setFormSubmitSuccessful(true)
        }
      })
      // Handle errors here however you like
      .catch(err =>
        console.error("Failed to send the estimate of giving. Error: ", err)
      )
  }

  return (
    <div id="pledge">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <StaticImage
            src="../../content/assets/WalkInLove.jpg"
            alt="Walk In Love"
            loading="eager"
            className={styles.image}
            placeholder="blurred"
            width={500}
          />
        </div>
        <div className={styles.descWrapper}>
          <div>
            <h1>Pledge for 2025</h1>
          </div>
        </div>

        {/* <p className={styles.text}>
          It’s time for stewardship and pledging once again. This year’s
          campaign will be decidedly low-key. Last year’s program resulted in
          fewer than expected pledges and, ultimately, less giving. We don’t
          know why, but please read on.
        </p> */}
        <p className={styles.text}>
          Thank you to those who pledged for 2024 and to those who faithfully
          give to Epiphany, pledge or no pledge. It is because of you that
          Epiphany exists and supports a worshipping community doing God’s work
          in the world.
        </p>
        <p className={styles.text}>
          Generosity is a journey, it’s a practice that we learn and nurture
          within our hearts. It just isn’t in our nature to give away what we
          have worked hard to acquire or to donate our precious time without
          compensation. It takes something as radical as Love to inspire us to
          share our time, talent, and treasure with others. This is a journey we
          make together, a Walk in Love.
        </p>
        <p className={styles.text}>
          As we have lived with the Gospel of St. Mark this year we have been
          brought into a world turned radically upside down. The laws and
          customs that had been in place for centuries were challenged, power
          and dominion have been questioned, and a culture hemmed in from all
          sides by oppression and subjection desperately seeks a way forward.{" "}
        </p>
        <p className={styles.text}>
          As it turns out, it is not clever politics or force that cause the
          change in society, but the simplest concept of Love. Jesus causes a
          revolution of thought and heart by daring to reach out to the outcast
          and teach others to do the same. He walks in love with the
          marginalized, with the poor, with the sick, and brings us along with
          him on his journey.
        </p>
        <p className={styles.text}>
          The most miraculous gift of Love is that it was there within us all
          along, all we had to do was find it, tap into it, and begin growing
          it. And look what has happened at Epiphany since you have been here!
          We have learned to share, to give, to volunteer, to accompany others,
          to feed, to pray, to visit, to strive for change.
        </p>
        <p className={styles.text}>This is our Walk in Love.</p>
        {/* <p className={styles.text}>
          We are asking that you consider, or reconsider, your financial giving
          to Epiphany. This should be a prayerful decision between you and God.
          Please don’t consider this a chore; it is an opportunity to reflect on
          your God-given abundance and God’s intent for your use of this
          abundance.
        </p> */}
        {/* <p className={styles.text}>
          All we ask is that you let us know what that answer is, even if it’s a
          commitment to pray each day for our ministries. It is important for
          the vestry to plan how to do God’s work at Epiphany and outside our
          doors in 2024. Without some indication of what to expect, it is very
          difficult for Epiphany to plan on living in the abundance received.
        </p> */}
        {/* <p className={styles.text}>
          We know you want to know the numbers for this year. We had pledges of
          $66,000. We expect to receive about $120,000 in giving this year. Our
          expenses will be about $177,000, resulting in an expected deficit of
          $57,000.{" "}
        </p> */}
        {/* <p className={styles.text}>
          Obviously, deficits of this amount are not sustainable.{" "}
        </p> */}
        {/* <p className={styles.text}>
          Our budget for 2022 was $198,000 so spending is much lower than
          expected. Outreach is the big loser when expenses exceed giving. While
          it’s the most important of our ministries, we can’t share what we
          don’t have.
        </p> */}
        {/* <p className={styles.text}>
          We hope that this year’s financial situation isn’t the new norm for
          Epiphany and is, rather, an anomaly. We certainly hope the latter is
          true.
        </p> */}
        <p className={styles.text}>Please Pray. Please Pledge. Please Give.</p>
        <p className={styles.text}>Please support our Walk in Love</p>
        <p className={styles.text}>Thank you.</p>
        <p className={styles.text}>In Christ,</p>
        <p className={styles.text}>Your Vestry</p>

        {/* display thank you message if form just submitted successfully. */}
        {formSubmitted && formSubmitSuccessful ? (
          <div>
            <div className={styles.container}>
              <br />
              <br />
              <h2 className={styles.title}>Thank You!</h2>
              <br />
              <h2 className={styles.title}>Your Pledge has been received.</h2>
              <br />
              <br />
            </div>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} id="pledgeform">
            <h2>Your Pledge for 2025</h2>
            <label>
              <input
                className={styles.textInput}
                type="text"
                name="donorName"
                id="donorName"
                placeholder="Your Name(s)"
                required
                onChange={e => handleNameChange(e)}
              />
            </label>

            <label>
              <input
                className={styles.textInput}
                type="email"
                name="donorEmail"
                id="donorEmail"
                placeholder="Email"
                onChange={e => handleEmailChange(e)}
              />
            </label>

            <div className={styles.amountContainer}>
              <input
                className={`${styles.textInput} ${styles.amountInput}`}
                type="number"
                min="1"
                step="1"
                name="donorAmount"
                id="donorAmount"
                placeholder="Amount"
                required
                onChange={e => handleAmountChange(e)}
              />
              <span className={styles.perText}>per</span>
              <select
                className={`${styles.textInput} ${styles.periodSelect}`}
                name="donorPeriod"
                id="donorPeriod"
                required
                onChange={e => handlePeriodChange(e)}
              >
                <option value="">Select period</option>
                <option value="week">Week</option>
                <option value="month">Month</option>
                <option value="year">Year</option>
              </select>
            </div>

            <label>
              <input
                className={styles.textInput}
                type="text"
                name="donorComment"
                id="donorComment"
                placeholder="Comments"
                onChange={e => handleCommentChange(e)}
              />
            </label>

            <div>
              <input
                type="submit"
                value="Submit Pledge"
                className={styles.button}
              />
            </div>

            <p className={styles.formText}>Other Ways to Pledge:</p>
            <ol className={styles.formText}>
              <li>
                Email pledge@epiphanyeden.org with your name and pledge amount.
              </li>
              <li>
                Mail a pledge to the church. You just need to provide your name
                and the pledge amount. No form is needed.
                {/* , but you can{" "}
                <a href={PledgeForm} target="blank">
                  {" "}
                  download a form here
                </a>{" "}
                if you prefer. */}
              </li>
              <li>
                Put a pledge in the collection plate. You just need to provide
                your name and the pledge amount. A form will be available at the
                church if needed or preferred.
              </li>
            </ol>
          </form>
        )}

        <div className={styles.offering}>
          <a href="https://tithe.ly/give?c=3897734">
            <button className={` ${styles.button} `}>Make an Offering</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Gift
