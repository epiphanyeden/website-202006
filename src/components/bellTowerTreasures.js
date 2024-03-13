import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div className={styles.outerContainer} id="btt">
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bell Tower Treasures</h1>
        <h1 className={styles.title}>Coming Up:</h1>
        <h1 className={styles.title}>Saturday April 13</h1>
        <h1 className={styles.title}>9 am to 1 pm</h1>
        <h1 className={styles.text}>
          Drop off donations on Tuesdays, 9:30 am until noon
        </h1>
      </div>
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/Bell Tower Treasures.jpg"
          alt="Bell Tower Treasures"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default BellTowerTreasures
