import React from "react"
import * as styles from "./lentStudy2024.module.css"
import { StaticImage } from "gatsby-plugin-image"
const LentStudy2024 = () => {
  return (
    <div className={styles.container}>
      <StaticImage
        src="../../content/assets/coffeeConversation.jpg"
        alt="Lenten Program"
        className={styles.image}
      />
    </div>
  )
}

export default LentStudy2024
