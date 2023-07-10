import React from "react"
import * as styles from "./vbs2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const VBS2023 = () => {
  return (
    <div>
      <div className={styles.container} id="bellTower">
        <StaticImage
          src="../../content/assets/vbs2023.jpg"
          alt="Vaction Bible School"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.footerContainer}>
        <p className={styles.text}>Epiphany gets to provide the food each night!</p>
        <p className={styles.text}>Food purchasers, preparers, servers and cleaner-uppers will be needed.</p>
        <p className={styles.text}>Be thinking about how you want to help.</p>
        <p className={styles.text}>
          Registration information will be coming soon.
        </p>
      </div>
    </div>
  )
}

export default VBS2023
