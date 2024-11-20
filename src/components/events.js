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
          <p className={styles.eventDate}>Nov 24</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Advent Wreath Workshop</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 5</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Advent Bible Study @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 7</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 12</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Advent Bible Study @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 14</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 19</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Advent Bible Study @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 21</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Longest Night Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 22</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Greening of the Church</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 24</p>
          <p className={styles.eventDay}>
            Tue&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 pm
          </p>
          <p className={styles.eventDesc}>Christmas Eve Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Dec 25</p>
          <p className={styles.eventDay}>
            Tue&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Christmas Morning Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 4</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Christmas Lessons and Carols</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 5 pm - 7 pm
          </p>
          <p className={styles.eventDesc}>Annual Chili Cookoff</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 11</p>
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
