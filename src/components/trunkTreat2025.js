import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./trunkTreat2025.module.css"

const TrunkTreat2025 = () => {
  return (
    <div id="boa" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/TrunkTreat2025.jpg"
          alt="Trunk or Treat at LUMC"
          loading="eager"
          className={styles.image}
          width={1000}
        />
      </section>
    
    </div>
  )
}
export default TrunkTreat2025
