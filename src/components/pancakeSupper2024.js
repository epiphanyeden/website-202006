import React from "react"
import * as styles from "./pancakeSupper2024.module.css"
import { StaticImage } from "gatsby-plugin-image"
const PancakeSupper2023 = () => {
  return (
    <div className={styles.container}>
      {/* <h1 className={styles.text}>Pancakes</h1>
      <h1 className={styles.text}>Tuesday</h1>
      <h1 className={styles.text}>5 pm to 7 pm</h1> */}
      <StaticImage
        src="../../content/assets/pancakeSupper2023.jpg"
        alt="Pancake supper info"
        height="600"
      />

      <h1 className={styles.text}>Tuesday Feb 13</h1>
      <h1 className={styles.text}>5 pm to 7 pm</h1>
    </div>
  )
}

export default PancakeSupper2023
