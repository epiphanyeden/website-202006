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
          <p className={styles.eventDate}>Jan 13</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
      </section>
    </div>
  )
}

export default Advent2023
