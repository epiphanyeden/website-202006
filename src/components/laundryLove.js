import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./laundryLove.module.css"

const LaundryLove = () => {
  return (
    <div id="laundrylove" className={styles.main}>
      <div className={styles.headerContainer}>
        <h1 className={styles.title}>Laundry Love</h1>
        <h1 className={styles.title}>Coming Up:</h1>
        <h1 className={styles.title}>Saturday January 4</h1>
        <h1 className={styles.title}>9 am to 11 am</h1>
      </div>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/LaundryLove1.jpg"
          alt="Laundry Love Poster"
          loading="eager"
          className={styles.image}
          width={450}
        />
      </section>
      <section className={styles.container}>
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
      </section>
    </div>
  )
}
export default LaundryLove
