import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./JesusRevolution.module.css"

const JesusRevolution = () => {
  return (
    <main>
      <section className={styles.imageContainer} id="bota">
        <StaticImage
          src="../..//content/assets/JesusRevolution.jpg"
          alt="Blessing of the Animals"
          loading="eager"
        />
      </section>
      {/* <section className={styles.container}>
        <p></p>
      </section> */}
    </main>
  )
}
export default JesusRevolution
