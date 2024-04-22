import React from "react"
import * as styles from "./bloodDrive2024.module.css"
import blooddriveGIF from "../../content/assets/BloodDrive202405.gif"

const BloodDrive2024 = () => {
  return (
    <div className={styles.container} id="blooddrive">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={blooddriveGIF}
          alt="Blood Drive"
          width="2000"
          height="2000"
        />
      </div>
      <div className={styles.buttonContainer}>
        <a href="https://www.redcrossblood.org/give.html/drive-results?zipSponsor=EpiphanyEden">
          <button className={styles.button}>Register</button>
        </a>
      </div>
    </div>
  )
}

export default BloodDrive2024
