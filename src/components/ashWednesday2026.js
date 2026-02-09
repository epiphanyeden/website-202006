import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./ashWednesday2026.module.css"

const AshWednesday2026 = () => {
  const linkUrl = "https://mailchi.mp/4ea30377d968/ashwednesday2026-1"
  return (
    <div id="annualmeeting" className={styles.main}>
      <section className={styles.imageContainer}>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreInfoButton}
        >
          More Info
        </a>
        <a href={linkUrl} target="_blank" rel="noopener noreferrer">
          <StaticImage
            src="../../content/assets/AshWednesday2026.jpeg"
            alt="Ash Wednesday Services at Epiphany and LUMC"
            loading="eager"
            className={styles.image}
            width={700}
          />
        </a>
        <a
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.moreInfoButton}
        >
          More Info
        </a>
      </section>

      {/* <div className={styles.headerContainer}>
        <h1 className={styles.heading1}>Advent Wreath Workshop</h1>
        <h1 className={styles.heading1}>Sunday Nov 30</h1>
      </div>

      <section className={styles.container}>
        <h2 className={styles.heading2}>
          During Coffee Hour after the 10 am service
        </h2>
        <p className={styles.text}>
          If you have any greens or gardening scissors, please bring them along.
        </p>
      </section> */}
    </div>
  )
}
export default AshWednesday2026
