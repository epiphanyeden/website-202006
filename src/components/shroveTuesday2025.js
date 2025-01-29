import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./shroveTuesday2025.module.css"

const ShroveTuesday2025 = () => {
  return (
    <div id="laundrylove" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/shroveTuesday2025.jpg"
          alt="Shrove Tuesday Information"
          loading="eager"
          className={styles.image}
          width={450}
        />
      </section>
    </div>
  )
}
export default ShroveTuesday2025
