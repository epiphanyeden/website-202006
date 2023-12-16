import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./longestNight2023.module.css"

const longestNight2023 = () => {
  return (
    <div className={styles.container} id="longestNight">
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/longestNight2023.png"
          alt="Longest Night"
          loading="eager"
          // className={styles.image}
          width={700}
        />
      </section>
      <h2 className={styles.heading2}>
        A sacred time and place for those struggling to find joy this season.
      </h2>
      <h2 className={styles.heading2}>+</h2>
      <h2 className={styles.heading2}>
        A quiet and contemplative worship service open to everyone.
      </h2>
      <p className={styles.text}>Dec 21 | Thursday | 5:30 pm</p>
    </div>
  )
}

export default longestNight2023
