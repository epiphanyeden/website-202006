import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./foodDrive2025.module.css"

const FoodDrive2025 = () => {
  return (
    <div id="fooddrive" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/FoodDrive20251116.jpg"
          alt="November Food Drive"
          loading="eager"
          className={styles.image}
          width={700}
        />
      </section>
    </div>
  )
}
export default FoodDrive2025
