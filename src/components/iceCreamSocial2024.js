import React from "react"
import * as styles from "./iceCreamSocial2024.module.css"
import { StaticImage } from "gatsby-plugin-image"

const IceCreamSocial2024 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer} id="icecream">
        <StaticImage
          src="../../content/assets/IceCreamSocial2024.jpg"
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
          A{" "}
          <a href="https://www.douglasselementary.org/_files/ugd/6b948f_703dd80bd7e64b3a8485eb210f50acc6.pdf">
            school supply list{" "}
          </a>
          can be found on the&nbsp;
          <a href="https://www.douglasselementary.org/"> school website</a>{" "}
          &nbsp;under Quick Links.
        </h1>
        <h1 className={styles.text}>
          We will also accept cash or&nbsp;
          <a href="https://tithe.ly/give_new/www/#/tithely/give-one-time/3897734">
            {" "}
            credit card donations
          </a>{" "}
          &nbsp;for the school to use as needed.
        </h1>
      </div>
    </div>
  )
}

export default IceCreamSocial2024
