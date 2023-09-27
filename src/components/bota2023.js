import React from "react"
import * as styles from "./bota2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Bota2023 = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading2}>Blessing of the Animals</h1>
        <h2 className={styles.heading2}>Wednesday, October 4</h2>
        <h2 className={styles.heading2}>5:30 pm to 7:00 pm</h2>
        <p className={styles.text}>All animals (and people) are welcome.</p>
        <p className={styles.text}>
          Please bring your animal in a carrier or on a leash.
        </p>
        <p className={styles.text}>
          If your pet can't join us, feel free to bring a picture for a
          blessing.
        </p>
        <p className={styles.text}>Stuffed animals are also welcome. </p>
        <p className={styles.text}>
          If you'd like to bring a picture of a pet who has died, we'll have a
          memorial table as well. We never forget those companion animals who
          are members of our families.
        </p>
        <p className={styles.text}>
          If you have an animal-related business or group and would like to have
          a table at the event, please let us know by Tuesday, October 3.
          There's no cost to use the space, and a table will be provided for
          those who contact us ahead of time.
        </p>
      </div>
      <div className={styles.imageContainer} id="bota">
        <StaticImage
          src="../../content/assets/bota2023.jpg"
          alt="Blessing of the Animals"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
    </div>
  )
}

export default Bota2023
