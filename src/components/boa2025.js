import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./boa2025.module.css"

const BOA2025 = () => {
  return (
    <div id="boa" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/boa2025.jpg"
          alt="Blessing of the Animals Info"
          loading="eager"
          className={styles.image}
          width={1000}
        />
      </section>
    </div>
  )
}
export default BOA2025
