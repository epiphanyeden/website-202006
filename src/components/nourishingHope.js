import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./nourishingHope.module.css"

const NourishingHope = () => {
  return (
    <div id="laundrylove" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/nourishingHope.jpg"
          alt="Nourishing Hope Information"
          loading="eager"
          className={styles.image}
          width={450}
        />
      </section>
    </div>
  )
}
export default NourishingHope
