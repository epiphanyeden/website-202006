import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./freedomPark2024.module.css"

const ScoopForSchool = () => {
  return (
    <main className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../..//content/assets/FreedomPark2023.jpg"
          alt="Outdoor Service at Freedom Park 2023"
          loading="eager"
          width="700"
        />
      </section>

      <section className={styles.headingContainer}>
        <h1 className={styles.heading1}>Worship Service</h1>
        <h1 className={styles.heading1}>Freedom Park</h1>
        <h1 className={styles.heading1}>June 9th </h1>
        <h1 className={styles.heading1}>10 am</h1>
        <h2 className={styles.heading2}>Cookout immediately following</h2>
      </section>
      <section className={styles.textContainer}>
        <p className={styles.text}>
          This special event is given by the Vestry for the church.
        </p>
        <p className={styles.text}>
          The congregation attends as guests of the Vestry who provide the meal
          & do the work!
        </p>
        <p className={styles.text}>
          The service will take place at picnic shelter #1, the main shelter up
          front near the splash pad, miniature golf and playground.
        </p>
        <p className={styles.text}>
          The shelter is rented from 9:30 a.m. until 3:00 p.m.
        </p>
        <p className={styles.text}>
          We will begin cooking after worship and plan to eat around noon, so
          there will be time to enjoy the park before and after worshiping and
          eating!
        </p>
        <p className={styles.text}>
          Please encourage your fellow church members to come out for worship,
          fellowship, food & fun!
        </p>
      </section>
    </main>
  )
}
export default ScoopForSchool
