import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./marion20250622.module.css"

const Marion20250622 = () => {
  return (
    <div id="transition" className={styles.main}>
      <section className={styles.upperContainer}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Pizza & Possibilities</h1>
          <h1 className={styles.title}>Sunday June 22</h1>
          <h1 className={styles.title}>11:30 am</h1>
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
          Join us for a special Question and Answer session with Marion Sprott,
          Transition Ministry Officer for our diocese.
        </p>
        <p className={styles.text}>
          Marion has been working closely with the Vestry as we begin to explore
          the transition from a full-time priest to a part-time model.
        </p>
        <p className={styles.text}>
          She will share what’s been done so far, explain the process ahead, and
          be available to hear your questions, concerns, and hopes.
        </p>
        <p className={styles.text}>
          This gathering will take place after the 10:00 a.m. service and in
          lieu of coffee hour.
        </p>
        <p className={styles.text}>Pizza lunch will be provided.</p>
        <p className={styles.text}>
          {" "}
          We are still at the beginning of this journey, and your voice matters.{" "}
        </p>
        <p className={styles.text}>
          Please come, learn more, and be part of this important conversation
          about the future of our parish life.
        </p>
        <p className={styles.text}> All are welcome. </p>
        <p className={styles.text}> We hope to see you there!</p>
      </section>
    </div>
  )
}
export default Marion20250622
