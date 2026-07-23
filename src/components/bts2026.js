import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bts2026.module.css"

const BTS2026 = () => {
  return (
    <div id="bash" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/BTS2026.jpg"
          alt="Back To School Text"
          loading="eager"
          className={styles.image}
          width={800}
        />
      </section>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/BTS2026Text.jpg"
          alt="Back To School Image"
          loading="eager"
          className={styles.image}
          width={800}
        />
      </section>
    </div>
  )
}
export default BTS2026
