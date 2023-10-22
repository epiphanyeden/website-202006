import React from "react"
import * as styles from "./litanyHolyLand.module.css"
import { StaticImage } from "gatsby-plugin-image"

const litanyHolyLand = () => {
  return (
    <div className={styles.outerContainer} id="holyland">
      <div className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/HolyLand.png"
          alt="Palestine and Israel flags"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <form>
          <button
            className={styles.button}
            formAction="https://www.episcopalchurch.org/ministries/office-government-relations/resources-for-the-conflict-in-the-holy-land/"
          >
            Episcopal resources related to the conflict in Gaza
          </button>
        </form>
        <form>
          <button
            className={styles.button}
            formAction="https://thankfulpriest.com/2023/10/14/a-litany-for-the-holy-land/"
          >
            Litany for the Holy Land
          </button>
        </form>
      </div>
    </div>
  )
}

export default litanyHolyLand
