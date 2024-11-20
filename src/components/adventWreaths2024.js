import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./adventWreaths2024.module.css"

const LaundryLove = () => {
  return (
    <div id="advent" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/adventWreaths2024.jpg"
          alt="Making Advent Wreaths"
          loading="eager"
          className={styles.image}
          width={1500}
        />
      </section>

      <div className={styles.headerContainer}>
        <h1 className={styles.heading1}>Advent Wreath Workshop</h1>
        <h1 className={styles.heading1}>Sunday Nov 24</h1>
        {/* <h2 className={styles.heading2}>
          During Coffee Hour After the 10 am service
        </h2> */}
      </div>

      <section className={styles.container}>
        <h2 className={styles.heading2}>
          During Coffee Hour after the 10 am service
        </h2>
        <p className={styles.text}>
          If you have any greens or gardening scissors, please bring them along.
        </p>
      </section>
    </div>
  )
}
export default LaundryLove
