import React from "react"
import * as styles from "./events.module.css"
import { Link } from "gatsby"

const Events = () => {
  return (
    <div className={styles.component} id="events">
      <section>
        <h1 className={styles.title}>Upcoming Events</h1>
      </section>
      <section className={styles.container}>
        <p>
          <Link to={`/calendar/`}>
            <button className={styles.button}>Calendar View</button>
          </Link>
        </p>
      </section>
      <section className={styles.container}>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 5</p>
          <p className={styles.eventDay}>
            Tue&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon
          </p>
          <p className={styles.eventDesc}>Prayer Service @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 6</p>
          <p className={styles.eventDay}>
            Wed &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 7 pm
          </p>
          <p className={styles.eventDesc}>Reconciliation Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 2</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 9</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
      </section>
    </div>
  )
}

export default Events
