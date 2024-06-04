import React from "react"
// import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./gunAwareness2024.module.css"

const GunAwareness2024 = () => {
  return (
    <section className={styles.container} id="gunawareness">
      <h1 className={styles.text}>Gun Violence Awareness Month</h1>
      <hr />
      <h2 className={styles.text}>June</h2>
      <hr />
      <section className={styles.msgContainer}>
        <p className={styles.text}>Why Orange?</p>
        <p className={styles.msgText}>
          On January 21, 2013, Hadiya Pendleton marched in President Obama’s
          second inaugural parade.One week later, Hadiya was shot and killed on
          a playground in Chicago. Soon after this tragedy, Hadiya’s friends
          commemorated her life by wearing orange, the color hunters wear in the
          woods to protect themselves and others. Wear Orange is now observed
          every June. Thousands of people wear the color orange to honor Hadiya
          and the more than 43,000 Americans are killed with guns and
          approximately 76,000 more are shot and wounded every year.
        </p>
        <p className={styles.citation}>
          -- Wear Orange{" "}
          <span>
            <a href="https://wearorange.org/" target="_blank" rel="noreferrer">
              https://wearorange.org/
            </a>
          </span>
        </p>
      </section>
      <section className={styles.buttonContainer}>
        <form>
          <button
            className={styles.button}
            formAction="https://www.episdionc.org/gun-violence-prevention/"
          >
            More Information
          </button>
        </form>
      </section>
    </section>
  )
}
export default GunAwareness2024
