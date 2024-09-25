import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./blessingAnimals2024.module.css"

const blessingAnimals2024 = () => {
  return (
    <div id="BlessingAnimals" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/2024BlessingAnimals.jpg"
          alt="Blessing of the Animals"
          loading="eager"
          className={styles.image}
          width={1200}
        />
      </section>
      <section className={styles.container}>
        <p className={styles.text}>
          In honor of St. Francis, the patron saint of the environment, animals
          and birds, we are hosting our Annual Blessing of the Animals event on
          Wednesday, October 2nd at 5:30 pm.{" "}
        </p>{" "}
        <p className={styles.text}>
          All animals great and small are welcome to come and participate and be
          blessed!{" "}
        </p>{" "}
        <p className={styles.text}>
          We are hoping to have some vendors come out and have some booths and
          treats for your pets.
        </p>{" "}
        <p className={styles.text}>
          We will also have a dog show! For a $5 entry fee you can enter your
          pet into any other following categories: Best Dressed, Prettiest Eyes,
          Best Hair, Life of the Paw-ty, and Best Kisser!{" "}
        </p>{" "}
        <p className={styles.text}>We hope to see you and your babies soon!</p>
      </section>
    </div>
  )
}
export default blessingAnimals2024
