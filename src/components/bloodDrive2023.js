import React from "react"
import * as styles from "./bloodDrive2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const BloodDrive2023 = () => {
  return (
    <div>
      <div className={styles.container} id="blooddrive">
        <StaticImage
          src="../../content/assets/bloodDrive2023.jpg"
          alt="Blood Drive"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.text}>Be sure to register early</p>
        <p className={styles.text}>
          <a href="https://www.redcrossblood.org/give.html/drive-results?zipSponsor=EpiphanyEden">
            Register
          </a>
        </p>
        <p className={styles.text}>
          On July 19, fill out the Rapid Pass form to make your check-in faster
          and easier
        </p>
        <p className={styles.text}>
          <a href="https://www.redcrossblood.org/donate-blood/manage-my-donations/rapidpass.html">
            Rapid Pass
          </a>
        </p>
      </div>
    </div>
  )
}

export default BloodDrive2023
