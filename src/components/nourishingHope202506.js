import React from "react"
import * as styles from "./nourishingHope202506.module.css"
// import blooddriveGIF from "../../content/assets/BloodDrive202405.gif"
import image from "../../content/assets/nourishingHope202506.jpg"

const NourishingHope202506 = () => {
  return (
    <div className={styles.container} id="NourishingHope">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={image}
          // src={blooddriveGIF}
          alt="Nourishing Hope"
          width="2000"
          height="2000"
        />
      </div>
    </div>
  )
}

export default NourishingHope202506
