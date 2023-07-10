import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div>
      {/* <div className={styles.headerContainer}>
        <h1 className={styles.title}>Bell Tower Treasures</h1>
        <h1 className={styles.title}>Coming Up:</h1>
        <h1 className={styles.title}>Saturday July 8</h1>
        <h1 className={styles.title}>9 am to 1 pm</h1>
      </div> */}
      <div className={styles.container} id="bellTower">
        <StaticImage
          src="../../content/assets/bellTowerTreasures.jpg"
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
