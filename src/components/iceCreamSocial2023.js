import React from "react"
import * as styles from "./iceCreamSocial2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IceCreamSocial2023 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} id="icecream">
        <StaticImage
          src="../../content/assets/IceCreamSocial2023_large.jpg"
          alt="Ice Cream Social"
          loading="eager"
          className={styles.image}
          placeholder="blurred"
          width={1000}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.text}>
          We are collecting school supplies for Douglass Elementary School.
        </h1>
        <h1 className={styles.text}>
          A school supply list can be found on the&nbsp;<a href="https://www.douglasselementary.org/"> school website</a> &nbsp;under Quick Links.
        </h1>
        <h1 className={styles.text}>
         We will also accept cash or&nbsp;<a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/3897734"> credit card donations</a> &nbsp;for the school to use as needed.
        </h1>
      </div>
    </div>
  )
}

export default IceCreamSocial2023
