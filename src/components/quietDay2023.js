import React from "react"
import * as styles from "./quietDay2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const VBS2023 = () => {
  return (
    <div className={styles.imageGrid}>
      <StaticImage
        src={"../../content/assets/adventCandles.png"}
        // alt="Advent"
        // loading="eager"
        className={styles.backgroundImage}
        layout="fullWidth"
        aspectRatio={3 / 1}
        formats={["auto", "webp", "avif"]}
      />
      <div className={styles.backgroundColor}>
        <div className={styles.backgroundImageText}>
          <h1 className={styles.title}>Advent Quiet Day</h1>
          <h2 className={styles.text}>A time of quiet and reflection</h2>
          <p className={styles.smallText}>
            Offered by the 4 Episcopal churches in Rockingham County
          </p>
          <br />
          <p className={styles.text}>December 16</p>
          <p className={styles.text}>St. Luke's in Eden</p>
          <p className={styles.text}>9am until 3 pm</p>
          <p className={styles.smallText}>Come or leave at any time</p>
          <p className={styles.smallText}>---------------------------</p>
          <p className={styles.mediumText}>Brown Bag Lunch</p>
          <p className={styles.smallText}>Drinks Provided</p>
          <p className={styles.smallText}>---------------------------</p>

          <p className={styles.smallText}>9:00 - 9:30 Gather</p>
          <p className={styles.smallText}>9:30 - 10:00 Morning Prayer</p>
          <p className={styles.smallText}>
            10:00 - 3:00 Quiet Reflection and Prayer
          </p>
          <p className={styles.smallText}>---------------------------</p>
        </div>
      </div>
    </div>
  )
}

export default VBS2023
