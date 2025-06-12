import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./marion20250622.module.css"

const Marion20250622 = () => {
  return (
    <div id="transition" className={styles.main}>
      <section className={styles.upperContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Pizza & Possibilities</h1>
          <h1 className={styles.title}>Sunday June 22</h1>
          <h1 className={styles.title}>11:30 am</h1>
        </div>
      </section>
      <section className={styles.imageContainer}>
        <div>
          <StaticImage
            src="../../content/assets/marion-sprott.jpg"
            alt="Marion Sprott"
            loading="eager"
            width="175"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          Join us for a special Question and Answer session with Marion Sprott,
          Transition Ministry Officer for our diocese.
        </p>
        <p className={styles.text}>
          Marion has been working closely with the Vestry as we begin to explore
          the transition from a full-time priest to a part-time model.
        </p>
        <p className={styles.text}>
          She will share what’s been done so far, explain the process ahead, and
          be available to hear your questions, concerns, and hopes.
        </p>
        <p className={styles.text}>
          This gathering will take place after the 10:00 a.m. service and in
          lieu of coffee hour.
        </p>
        <p className={styles.text}>Pizza lunch will be provided.</p>
        <br />
        <p className={styles.title}>Have a Question❓ Comment❓ Concern❓ </p>

        <p className={styles.title}>
          Marion and the Vestry would LOVE to hear from you!
        </p>

        <p className={styles.text}>
          If you have a question that you would like Marion to have prior to her
          visit you can email that to Beth at seniorwarden@ edenepiphany.org.{" "}
        </p>

        <p className={styles.text}>
          If you wish your question or comment to remain anonymous, mail it
          unsigned to Church of the Epiphany 528 Henry St. Eden, NC, stop by the
          church and submit your question to the question box in the parish hall
          or fill out an anonymous form online.
        </p>

        <section className={styles.offering}>
          <a href="https://forms.gle/C42WPe7eg8CwvpM9A">
            <button className={` ${styles.button} `}>
              Online Comment Form
            </button>
          </a>
        </section>

        <p className={styles.title}>
          We are still at the beginning of this journey
        </p>
        <p className={styles.title}>Your voice matters.</p>
        <p className={styles.title}>
          Please come, learn more, and be part of this important conversation.
        </p>
        <p className={styles.title}> We hope to see you there!</p>
      </section>
    </div>
  )
}
export default Marion20250622
