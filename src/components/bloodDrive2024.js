import React from "react"
import * as styles from "./bloodDrive2024.module.css"
// import blooddriveGIF from "../../content/assets/BloodDrive202405.gif"
import blooddrive from "../../content/assets/BloodDonationThankYou2024.jpg"

const BloodDrive2024 = () => {
  return (
    <div className={styles.container} id="blooddrive">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={blooddrive}
          // src={blooddriveGIF}
          alt="Blood Drive Thank You"
          width="2000"
          height="2000"
        />
      </div>
      {/* <div className={styles.buttonContainer}>
        <a href="https://www.redcrossblood.org/give.html/drive-results?zipSponsor=EpiphanyEden">
          <button className={styles.button}>Reserve Your Spot</button>
        </a>
      </div>
      <p className={styles.text}>
        There will be a drawing for free gas cards for all who come to donate!
      </p> */}
    </div>
  )
}

export default BloodDrive2024
