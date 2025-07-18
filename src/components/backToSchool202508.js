import React from "react"
import * as styles from "./backToSchool202508.module.css"
// import blooddriveGIF from "../../content/assets/BloodDrive202405.gif"
import image from "../../content/assets/BackToSchool202508.png"

const NourishingHope202506 = () => {
  return (
    <div className={styles.container} id="back2school">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          // src={blooddriveGIF}
          alt="Back to School Bash"
          width="2000"
          height="2000"
        />
      </div>
    </div>
  )
}

export default NourishingHope202506
