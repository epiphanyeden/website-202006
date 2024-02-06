import React from "react"
import * as styles from "./rex.module.css"

const Rex = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.container}>
        <div className={styles.item}>
          <h1 className={styles.header}>Celebration of Life</h1>
          <h1 className={styles.header}>For</h1>
          <h1 className={styles.header}>Rex Rouse</h1>
          <p>
            A service of Holy Eucharist celebrating the life of Rex Rouse will
            be held at 1:00 pm on Friday, February 9.
          </p>
          <p>The service will be held in the church.</p>
          <p>The committal will follow at the Columbarium.</p>
          <p>
            Following the service the family will greet visitors at the
            Morehead-Fair House, 420 Boone Road.
          </p>
          <p>
            <a href="https://maps.app.goo.gl/2sykohxc7aSMYecM6">Directions</a>
          </p>

          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d6414.924451271907!2d-79.7667569!3d36.4947029!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m3!3m2!1d36.4927907!2d-79.7672414!4m5!1s0x8852eab8cccc3655%3A0x4401539e63371ec8!2s420%20Boone%20Rd%2C%20Eden%2C%20NC!3m2!1d36.4971649!2d-79.760556!5e0!3m2!1sen!2sus!4v1707233933740!5m2!1sen!2sus"
            width="740"
            height="600"
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe> */}
        </div>
      </div>
    </div>
  )
}

export default Rex
