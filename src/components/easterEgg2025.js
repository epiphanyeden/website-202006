import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./easterEgg2025.module.css"

const LaundryLove = () => {
  return (
    <div id="EasterEgg" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/easterEgg2025.jpg"
          alt="Laundry Love Poster"
          loading="eager"
          className={styles.image}
          width={600}
        />
      </section>
    </div>
  )
}
export default LaundryLove
