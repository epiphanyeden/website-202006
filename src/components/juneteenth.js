import React from "react"
import * as styles from "./juneteenth.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Juneteenth = () => {
  return (
    <div className={styles.outerContainer} id="juneteenth">
      <div className={styles.textContainer}>
        {/* <h1 className={styles.title}>Juneteenth</h1> */}
        <p className={styles.title}>June 19</p>
      </div>

      <div className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/juneteenth.png"
          alt="Juneteenth"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <section className={styles.buttonContainer}>
        <form>
          <button
            className={styles.button}
            formAction="https://www.episcopalchurch.org/racialreconciliation/juneteenth-and-the-call-to-remember/"
          >
            The Call To Remember
          </button>
        </form>
      </section>
      <section className={styles.buttonContainer}>
        <form>
          <button
            className={styles.button}
            formAction="https://nmaahc.si.edu/juneteenth"
          >
            The History
          </button>
        </form>
      </section>
    </div>
  )
}

export default Juneteenth
