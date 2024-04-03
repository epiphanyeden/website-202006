import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div className={styles.outerContainer} id="btt">
      {/* <div className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/Bell Tower Treasures.jpg"
          alt="Bell Tower Treasures"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div> */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bell Tower Treasures</h1>
        <p className={styles.text}>Next Sale:</p>
        <p className={styles.text}>Saturday May 11, 9 am to 1 pm</p>
        {/* <p className={styles.text}>9 am to 1 pm</p> */}
      </div>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>
          In order to streamline our process and organize inventory, Bell Tower
          Treasures will NOT be open for sales in April.
        </p>
        <p className={styles.smallText}>
          However, please join us to shop our newly updated merchandise, on
          Saturday, May 11, from 9am to 1pm.
        </p>
        <p className={styles.smallText}>
          Donations will continue to be accepted on Tuesdays from 9 am to 2:30
          pm or by calling 336-623-9410 for an appointment.
        </p>
        <p className={styles.smallText}>
          We wish to thank all our customers for their continued support of Bell
          Tower Treasures. Remember proceeds go to support Outreach Programs at
          Church of the Epiphany!
        </p>
      </div>
    </div>
  )
}

export default BellTowerTreasures
