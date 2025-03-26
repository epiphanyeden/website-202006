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
      <section className={styles.textContainer}>
        <p className={styles.text}>
          Nourishing Hope is a new ministry that Epiphany will be doing where we
          will serve the community a meal.{" "}
        </p>
        <p className={styles.text}>
          Our first meal is Sunday, March 30th from 12pm-2pm and we will be
          serving soup and sandwiches!{" "}
        </p>
        <p className={styles.text}>
          Volunteers are asked to arrive an hour before to help with
          preparations.” We plan to do this quarterly on the fifth Sunday of the
          month.
        </p>
        <p className={styles.text}>
          The planned future dates are June 29th, August 31st, November 30th.
        </p>
      </section>
    </div>
  )
}
export default NourishingHope
