import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
// import { StaticImage } from "gatsby-plugin-image"
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
        <p className={styles.text}>Saturday June 8</p>
        <p className={styles.text}>9 am to 1 pm</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>
          Be sure to come by and see what we have.
        </p>
        <p className={styles.smallText}>
          You will find a range of items available, from basic household items
          to household decor, furniture, jewelry and seasonal items.
        </p>
        <p className={styles.smallText}>
          Most items are gently used with exceptional prices.
        </p>
        <p className={styles.smallText}>Don't Miss out!</p>

        <p className={styles.smallText}>
          We wish to thank all our customers for their continued support of Bell
          Tower Treasures.
        </p>
        <p className={styles.smallText}>
          Remember proceeds go to support Outreach Programs at Church of the
          Epiphany!
        </p>
        <p className={styles.smallText}>
          Donations are accepted on Tuesdays from 9 am to 2:30 pm or by calling
          336-623-9410 for an appointment.
        </p>
      </div>
    </div>
  )
}

export default BellTowerTreasures
