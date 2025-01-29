import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./whatIsEpiscopal.module.css"

const WhatIsEpiscopal = () => {
  return (
    <div id="lwhatIsEpiscopal" className={styles.main}>
      <section className={styles.videoContainer}>
        <iframe
          className={styles.iframContainer}
          width="560"
          height="320"
          src="https://www.youtube.com/embed/hN_JhLCrfoQ?si=jVPQQO61YAMYjfs0"
          title="What is the Episcopal Church?"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
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
export default WhatIsEpiscopal
