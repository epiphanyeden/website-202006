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
      {/* <section className={styles.container}>
        <p className={styles.book}>"Giving the Gift of Clean Clothes"</p>

        <p className={styles.text}>
          The first Saturday of each month is Laundry Love day at Epiphany.
        </p>

        <p className={styles.text}>Wash Tub Laundry</p>
        <p className={styles.text}>
          <a href="https://goo.gl/maps/x77QSUtpZxMLVjRw6">
            403 Kings Hwy in Eden
          </a>
        </p>
        <p className={styles.text}>
          We meet our neighbors, pay for their laundry and share some coffee and
          snacks.
        </p>
        <p className={styles.text}>
          If you have questions, please email outreach@epiphanyeden.org or
          contact the church.
        </p>
      </section> */}
    </div>
  )
}
export default HotDogsBingo
