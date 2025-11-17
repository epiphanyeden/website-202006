import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./adventWreaths2025.module.css"

const AdventWreaths2025 = () => {
  return (
    <div id="advent" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/AdventWreath20251116.jpg"
          alt="Making Advent Wreaths"
          loading="eager"
          className={styles.image}
          width={700}
        />
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
export default AdventWreaths2025
