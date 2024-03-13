import React from "react"
import * as styles from "./solaceSeekers.module.css"
import "@fontsource/aboreto"
import { StaticImage } from "gatsby-plugin-image"
const SolaceSeekers = () => {
  return (
    <div className={styles.container} id="solaceseekers">
      <StaticImage
        src="../../content/assets/SolaceSeekers.jpg"
        alt="Solace Seekers 3rd Thur 5:30 pm"
        loading="lazy"
        object-fit="cover"
        className={styles.image}
      />
    </div>
  )
}

export default SolaceSeekers
