import React from "react"
import * as styles from "./chiliCookoff2024.module.css"
import { StaticImage } from "gatsby-plugin-image"

const ChiliCookoff2024 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} id="chili">
        <StaticImage
          src="../../content/assets/chilicookoff2024.jpg"
          alt="Chili Cookoff"
          loading="eager"
          className={styles.image}
          placeholder="blurred"
          width={500}
        />
      </div>
      <div className={styles.textContainer}>
        <p className={styles.text}>Epiphany's Chili Cookoff is back!</p>
        <p className={styles.text}> Saturday, January 6, 2024 at 5:30 pm</p>
        <p className={styles.text}>
          Bring chili made from your favorite recipe and enter the competition.
        </p>
        <p className={styles.text}>Everyone is welcome to enter. </p>
        <p className={styles.text}>
          There's no charge, but donations will be gladly accepted.
        </p>
        <p className={styles.text}>
          If you don't make chili, you can still come and eat.
        </p>
        <p className={styles.text}>
          We can always use cornbread, cheese, sour cream, crackers, or anything
          else that goes with chili.
        </p>
        <p className={styles.text}> We need desserts too!</p>
        <p className={styles.text}> Hope to see you Saturday evening.</p>
      </div>
    </div>
  )
}

export default ChiliCookoff2024
