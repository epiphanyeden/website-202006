import React from "react"
import * as styles from "./bellTowerTreasures.module.css"
import { StaticImage } from "gatsby-plugin-image"
const BellTowerTreasures = () => {
  return (
    <div className={styles.outerContainer} id="btt">
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Bell Tower Treasures</h1>
        <p className={styles.text}>Next Sale:</p>
        <p className={styles.text}>Saturday July 13</p>
        <p className={styles.text}>9 am to 1 pm</p>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>
          Bell Tower Treasures is a small, church-run store located at the
          church.
        </p>
        <p className={styles.smallText}>
          Open on the second Saturday of each month, we sell gently used items
          including accessories, housewares, jewelry, holiday, seasonal, &
          outdoor decor, dishes, glassware and much more.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.portraitImage}>
          <StaticImage
            src="../../content/assets/BTT_20240614_1.jpg"
            alt="Bell Tower Treasures"
            loading="eager"
            object-fit="cover"
            className={styles.image}
          />
        </div>
        <div className={styles.landscapeImage}>
          <StaticImage
            src="../../content/assets/BTT_20240614_2.jpg"
            alt="Bell Tower Treasures"
            loading="eager"
            object-fit="cover"
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>
          Proceeds from all sales are used to fund Outreach Programs that
          benefit families, children and others in need in our community.
        </p>
        <p className={styles.smallText}>
          Donations of new or gently used items are welcome and may be made to
          Bell Tower Treasures on Tuesdays from 10:00-2:00 at Church of the
          Epiphany or by calling 336 623 9410 for an appointment.
        </p>
      </div>
    </div>
  )
}

export default BellTowerTreasures
