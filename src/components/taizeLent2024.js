import React from "react"
import * as styles from "./taizeLent2024.module.css"
import "@fontsource/aboreto"
import { StaticImage } from "gatsby-plugin-image"
const TaizeLent2024 = () => {
  return (
    <div className={styles.container} id="taize">
      <StaticImage
        src="../../content/assets/taizeLent2023.jpg"
        alt="Taize on Wednesdays 6 pm"
        loading="lazy"
        object-fit="cover"
        className={styles.image}
      />
      <h1 className={styles.text}>
        A simple, meditative form of worship, calling us to dwell deeply on
        Christ's presence around and within us.
      </h1>
      <h1 className={styles.text}>
        Mantra songs, prayerful silence, and short readings guide the focus of
        the prayer in a candle-lit environment.
      </h1>
      <h2 className={styles.smallText}>Wednesdays at 6 pm</h2>
    </div>
  )
}

export default TaizeLent2024
