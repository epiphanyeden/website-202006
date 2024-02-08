import React from "react"
import * as styles from "./ashWednesday2024.module.css"
import { StaticImage } from "gatsby-plugin-image"
const AshWednesday2024 = () => {
  return (
    <div className={styles.container}>
      <StaticImage
        src="../../content/assets/AshWednesday2024.jpg"
        alt="Ash Wednesday info"
        className={styles.image}
      />
    </div>
  )
}

export default AshWednesday2024
