import React from "react"
import * as styles from "./nourishingHope202511.module.css"
import image from "../../content/assets/nourishingHope202511.jpg"

const NourishingHope202511 = () => {
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

export default NourishingHope202511
