import React from "react"
import * as styles from "./events.module.css"

const Events = () => {
  return (
    <div className={styles.component} id="upcoming">
      <section>
        <h1 className={styles.title}>Upcoming Events</h1>
      </section>
      <section className={styles.container}>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 9</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 1 pm
          </p>
          <p className={styles.eventDesc}>Celebration of Life for Rex Rouse</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 10</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 13</p>
          <p className={styles.eventDay}>
            Tues&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;5 pm - 7 pm
          </p>
          <p className={styles.eventDesc}>Shrove Tuesday Pancake Supper</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 14</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;Noon
          </p>
          <p className={styles.eventDesc}>Ash Wednesday Service @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 14</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;7 pm
          </p>
          <p className={styles.eventDesc}>Ash Wednesday Service @ Epiphany</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 21</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Lenten Study @ Messiah</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 21</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 28</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Lenten Study @ TBD</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 28</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div>
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 6</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 13</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 20</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 27</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 28</p>
          <p className={styles.eventDay}>
            Thur&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Maundy Thursday Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 29</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; TBD
          </p>
          <p className={styles.eventDesc}>Good Friday Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 31</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9:30 am
          </p>
          <p className={styles.eventDesc}>Flowering of the Cross</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 31</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday Service</p>
        </div> */}
      </section>
    </div>
  )
}

export default Events
