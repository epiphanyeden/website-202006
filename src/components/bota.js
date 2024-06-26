import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./bota.module.css"

const Bota = () => {
  return (
    <main>
      <section className={styles.imageContainer} id="bota">
        <StaticImage
          src="../..//content/assets/bota2023.jpg"
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
export default Bota
