import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./laundryLove.module.css"

const LaundryLove = () => {
  return (
    <div id="laundrylove" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/laundryLove.jpg"
          alt="Laundry Love Poster"
          loading="eager"
          className={styles.image}
          width={450}
        />
      </section>
      <section className={styles.container}>
        <div className={styles.headerContainer}>
          <h1 className={styles.title}>Next:</h1>
          <h1 className={styles.title}>Saturday Dec 6</h1>
          <h1 className={styles.title}>9 am to 11 am</h1>
        </div>
        {/* <p className={styles.book}>"Giving the Gift of Clean Clothes"</p> */}

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
