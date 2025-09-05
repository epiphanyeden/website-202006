import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./childrenChurch.module.css"

const ChildrenChurch = () => {
  return (
    <div id="laundrylove" className={styles.main}>
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
