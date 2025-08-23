import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./marion20250907.module.css"ß

const Marion20250907 = () => {
  return (
    <div id="marion" className={styles.main}>
      <section className={styles.upperContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Brunch with Marion Sprott</h1>
          <h1 className={styles.title}>Congregational Meeting</h1>
          <h1 className={styles.title}>Sunday September 7</h1>
          <h1 className={styles.title}>11:00 am</h1>
        </div>
      </section>
      <section className={styles.imageContainer}>
        <div>
          <StaticImage
            src="../../content/assets/marion-sprott.jpg"
            alt="Marion Sprott"
            loading="eager"
            width="175"
            className={styles.image}
          />
        </div>
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          Please join us after church on Sunday, September 7th for our second
          congregational meeting with Marion Sprott, Transition Ministry Officer
          for our diocese.
        </p>
        <p className={styles.text}>
          Marion is walking with us as we move from a full-time to part-time
          priest model—your presence and voice are vital in this next step of
          our journey.
        </p>
        <p className={styles.text}>
          After the service, we’ll gather for brunch in the Parish Hall. Feel
          free to bring something to share—breakfast or lunch, sweet or savory.
          It doesn’t need to be fancy (store-bought muffins or a container of
          your favorite juice are just fine!). And if you forget, no
          worries—there will be plenty.
        </p>
        <p className={styles.text}>
          The most important thing to bring is yourself.
        </p>
      </section>
    </div>
  )
}
export default Marion20250907
