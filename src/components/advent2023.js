import React from "react"
import * as styles from "./advent2023.module.css"

const Advent2023 = () => {
  return (
    <div className={styles.component} id="advent">
      <section>
        <h1 className={styles.title}>Upcoming Events</h1>
      </section>
      <section className={styles.container}>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 21</p>
          <p className={styles.eventDay}>Thur &nbsp;|&nbsp;&nbsp;5:30 pm</p>
          <p className={styles.eventDesc}>Longest Night Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 24</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;10:00 am
          </p>
          <p className={styles.eventDesc}>Sunday Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 24</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11:00 pm
          </p>
          <p className={styles.eventDesc}>Christmas Eve Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 25</p>
          <p className={styles.eventDay}>
            Mon&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;10:00 am
          </p>
          <p className={styles.eventDesc}>Christmas Day Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 31</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;10:00 am
          </p>
          <p className={styles.eventDesc}>Christmas Lessons & Carols</p>
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
