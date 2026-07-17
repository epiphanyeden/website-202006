import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./hotDogsBingo202607.module.css"

const HotDogsBingo202607 = () => {
  return (
    <div id="bingo" className={styles.main}>
      {/* <div className={styles.headerContainer}>
        <h1 className={styles.title}>Bingo</h1>
        <h1 className={styles.title}>And</h1>ß
        <h1 className={styles.title}>Hot Dogs</h1>
        <h1 className={styles.title}>Friday September 7</h1>
        <h1 className={styles.title}>5 pm to 7 pm</h1>
      </div> */}
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/BingoHotDogs202607.jpg"
          alt="Hot Dogs and Bingo"
          loading="eager"
          className={styles.image}
          width={800}
        />
      </section>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/Bingo.jpg"
          alt="Hot Dogs and Bingo"
          loading="eager"
          className={styles.image}
          width={800}
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          Please register (for free) so we can plan for the best event possible
        </p>
        <form>
          <button
            className={styles.button}
            formAction="https://www.eventbrite.com/e/hotdogs-and-bingo-night-tickets-1993845410295?fbclid=IwY2xjawTEwlxleHRuA2FlbQIxMQBzcnRjBmFwcF9pZBAyMjIwMzkxNzg4MjAwODkyAAEeS6yVfXTVwtqCiKNIiivIUoM7Vn9o4huSn24zdZi0ty6ZjYEiT5Ur4OJqsoo_aem_qvb0xYr8LdWOj4MPfe7jfw
            "
          >
            Register Here
          </button>
        </form>
      </section>
    </div>
  )
}
export default HotDogsBingo202607
