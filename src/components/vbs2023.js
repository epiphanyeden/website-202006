import React from "react"
import * as styles from "./vbs2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const VBS2023 = () => {
  return (
    <div>

      <div className={styles.imageContainer} id="vbs">
        <StaticImage
          src="../../content/assets/vbs2023.jpg"
          alt="Vaction Bible School"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Vacation Bible School 2023
        </h1>
        <h1 className={styles.title}>
          Live and In-Person
        </h1>
        <h1 className={styles.title}>
          Hosted by Epiphany and Leaksville United Methodist
        </h1>
        <hr />
        <a href="https://forms.gle/Brf2Hy9N4HcCdqVp7">
          <button className={styles.button} >Register Here</button>
        </a>
        <hr />
        <h1 className={styles.title}>
          Sessions
        </h1>
        <h1 className={styles.title}>
          Mon July 31 - Wed August 2
        </h1>
        <h1 className={styles.title}>
          Check-in: 4:45 pm
        </h1>
        <h1 className={styles.title}>
          Program: 5:15 - 7:30 pm
        </h1>
        <h1 className={styles.title}>
          <a href=" https://goo.gl/maps/FbBcMDhgzSXU8hfH9">Leaksville UMC</a>
        </h1>

        <hr />
        <h1 className={styles.title}>
          All children age 3 through rising 6th Grade are invited to attend!
        </h1>
        <h1 className={styles.title}>(age 3 by July 1 and potty-trained)</h1>
        <hr />
        <h1 className={styles.title}>A light dinner will be served each night.</h1>
        <hr />
        <p className={styles.text}>
          Hero Hotline
        </p>
        <p className={styles.text}>
          Children will become Heroes!
        </p>
        <p className={styles.text}>
          And discover:
        </p>
        <p className={styles.text}>
          Everyone's gifts are valued!
        </p>
        <p className={styles.text}>
          Every Hero has a role to play !
        </p>
        <hr />
        <h1 className={styles.title}>
          If you have any questions or can help with meals
        </h1>
        <h1 className={styles.title}>
          Please email or call Deb Norton

        </h1>
        <h1 className={styles.title}>
          <a href="mailto: epiphanyleaksvillevbs@gmail.com">epiphanyleaksvillevbs@gmail.com</a>
         
        </h1>
        <h1 className={styles.title}>
          <a href="tel:1-276-779-4006">276-779-4006</a>
        </h1>
        <figure className={styles.quote}>
          <blockquote>
            "So let’s strive together for the things that bring peace and the
            things that build each other up."
          </blockquote>
          <figcaption>Romans 14:19</figcaption>
        </figure>
      </div>
    </div>
  )
}

export default VBS2023
