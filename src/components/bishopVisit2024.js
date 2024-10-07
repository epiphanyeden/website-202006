import React from "react"
import * as styles from "./bishopVisit2024.module.css"
import { StaticImage } from "gatsby-plugin-image"

const BishopVisit2024 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper} id="bishopvisit">
        <StaticImage
          src="../../content/assets/BishopJennifer.jpg"
          alt="Bishop Jennifer"
          loading="eager"
          className={styles.image}
          placeholder="blurred"
          width={500}
        />
        <figcaption>
          Courtesy of Episcopal Diocese of North Carolina.
        </figcaption>
      </div>
      <div className={styles.textWrapper}>
        <h1 className={styles.heading}>Bishop Jennifer Visiting</h1>
        <h1 className={styles.heading}>Sunday October 20</h1>
        <p>
          Church of the Epiphany and St. Luke's will welcome{" "}
          <a href="https://www.episdionc.org/bishops/">
            The Rt. Rev. Jennifer Brooke-Davidson
          </a>{" "}
          , Assistant Bishop of NC, on October 20 at Church of the Epiphany.
        </p>
        <p>
          Please plan on being at Epiphany by 9 am for a teaching opportunity
          with Bishop Jennifer.
        </p>
        <p>The service will be at the normal time of 10 am.</p>
        <p>
          There will be a reception for Bishop Jennifer following the service.
        </p>
        <p>
          Please note: Your contribution to the Bishop's Discretionary Fund,
          based on the loose plate offering, is very much appreciated during
          this time. Your offering helps us to care for and reach out to those
          who are vulnerable and in need. Another way to give is using the{" "}
          <a href="https://givingtools.com/give/1182/1995">
            online giving link.
          </a>
        </p>
      </div>
    </div>
  )
}

export default BishopVisit2024
