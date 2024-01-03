import React from "react"
import * as styles from "./advent2023.module.css"

const Advent2023 = () => {
  return (
    <div className={styles.component} id="upcoming">
      <section>
        <h1 className={styles.title}>Upcoming Events</h1>
      </section>
      <section className={styles.container}>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 6</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 6</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;5:30 pm
          </p>
          <p className={styles.eventDesc}>Annual Chili Cookoff</p>
        </div>
      </section>
    </div>
  )
}

export default Advent2023
