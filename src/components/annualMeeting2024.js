import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./annualMeeting2024.module.css"

const AnnualMeeting2024 = () => {
  return (
    <div id="annualmeeting" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/AnnualMeeting2024.jpg"
          alt="Laundry Love Poster"
          loading="eager"
          className={styles.image}
          width={900}
        />
      </section>
    </div>
  )
}
export default AnnualMeeting2024
