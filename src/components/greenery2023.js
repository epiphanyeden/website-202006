import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./greenery2023.module.css"

const Greenery2023 = () => {
  return (
    <div className={styles.container} id="greenery">
      <section>
        <h1 className={styles.title}>Poinsettias and Wreaths</h1>
      </section>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/poinsettias.png"
          alt="Poinsettia $15"
          loading="eager"
          // className={styles.image}
          width={300}
        />
        <StaticImage
          src="../../content/assets/wreaths.png"
          alt="Poinsettia $15"
          loading="eager"
          // className={styles.image}
          width={300}
        />
      </section>
      <h2 className={styles.heading2}>
        Wreaths and Poinsettias are ready to be purchased for the Christmas
        season at Epiphany.
      </h2>
      <section className={styles.textContainer}>
        <p className={styles.text}>
          There are several ways you can place your order:{" "}
        </p>
        <p className={styles.text}>------------------------</p>
        <p className={styles.text}>
          Fill out an order form found at the church and provide check or cash
          in the collection plate.{" "}
        </p>
        <p className={styles.text}>------------------------</p>

        <p className={styles.text}>
          Mail a check to the church. Be sure to indicate poinsettia or wreath
          on the memo line as well as the name of an individual you would like
          to honor.{" "}
        </p>
        <p className={styles.text}>------------------------</p>

        <p className={styles.text}>
          Order online through the church’s&nbsp;
          <a href="https://epiphanyeden.us17.list-manage.com/track/click?u=a3f429c9b2ab91d27de19f6cd&id=f667e7a6a4&e=e3fe694a5e">
            &nbsp;on-line donation form
          </a>
          . Be sure to select Poinsettia/Wreath as the Fund and in the memo
          indicate which you are purchasing and who you wish to honor.
        </p>
      </section>
    </div>
  )
}

export default Greenery2023
