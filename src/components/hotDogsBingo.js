import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hotDogsBingo.module.css"

const HotDogsBingo = () => {
  return (
    <div id="HotDogsBingo" className={styles.main}>
      {/* <div className={styles.headerContainer}>
        <h1 className={styles.title}>Bingo</h1>
        <h1 className={styles.title}>And</h1>ß
        <h1 className={styles.title}>Hot Dogs</h1>
        <h1 className={styles.title}>Friday September 7</h1>
        <h1 className={styles.title}>5 pm to 7 pm</h1>
      </div> */}
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/HotDogBingo2024.jpg"
          alt="Laundry Love Poster"
          loading="eager"
          className={styles.image}
          width={1200}
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          Please register so we can plan for the best event possible
        </p>
        <form>
          <button
            className={styles.button}
            formAction="https://www.eventbrite.com/e/bingo-hot-dogs-tickets-1002415741467"
          >
            Register Here
          </button>
        </form>
      </section>
    </div>
  )
}
export default HotDogsBingo
