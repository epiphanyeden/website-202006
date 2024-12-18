import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./longestNight2023.module.css"

const LongestNight2023 = () => {
  return (
    <div className={styles.container} id="longestNight">
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/Longest Night 2023.png"
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
      <h2 className={styles.heading2}>LONGEST NIGHT SERVICE</h2>
      <p className={styles.text}>Dec 21 | Saturday | 6 pm</p>
    </div>
  )
}

export default LongestNight2023
