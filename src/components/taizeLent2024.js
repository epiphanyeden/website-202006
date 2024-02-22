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
        The Taize service is a candlelit, quiet and reflective Eucharist
        service.
      </h1>
      <h1 className={styles.text}>
        It includes bible readings, prayers, and times of silence as well as
        music.
      </h1>
      <h1 className={styles.text}>
        The music consists of meditative chants that are simple and easy to
        sing.
      </h1>
      <h2 className={styles.smallText}>Wednesdays at 6 pm</h2>
    </div>
  )
}

export default TaizeLent2024
