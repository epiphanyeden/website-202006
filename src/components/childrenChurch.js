import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./childrenChurch.module.css"

const ChildrenChurch = () => {
  return (
    <div id="childrenschurch" className={styles.main}>
      <section className={styles.headerContainer}>
        <h1 className={styles.title}>Children's Church</h1>
        <h1 className={styles.title}>First Sunday of the Month</h1>
        <h1 className={styles.title}>9:45 am</h1>
      </section>

      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/childrenChurch202509.jpg"
          alt="Children Churcm Info"
          loading="eager"
          className={styles.image}
          width={1200}
        />
      </section>
    </div>
  )
}
export default ChildrenChurch
