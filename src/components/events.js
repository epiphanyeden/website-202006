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
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Jan 4</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>

        <div className={styles.event}>
          <p className={styles.eventDate}>Jan 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 5 pm - 7 pm
          </p>
          <p className={styles.eventDesc}>Annual Chili Cookoff</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Feb 1</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon - 2 pm
          </p>
          <p className={styles.eventDesc}>Nourishing Hope</p>
        </div> */}

        <div className={styles.event}>
          <p className={styles.eventDate}>Aug 17</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Holy Eucharist</p>
          <p className={styles.eventDesc}>Rev. Barbara Cooke</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>August 17</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 2 pm - 4 pm
          </p>
          <p className={styles.eventDesc}>Back To School Bash</p>
        </div>

        <div className={styles.event}>
          <p className={styles.eventDate}>Sept 6</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Sept 7</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9:45 am
          </p>
          <p className={styles.eventDesc}>Children's Church</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Sept 7</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Covered dish with Marion Sprott</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Sept 13</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>

        <div className={styles.event}>
          <p className={styles.eventDate}>Oct 8</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 5:30 pm to 7:30 pm
          </p>
          <p className={styles.eventDesc}>
            Genesis Jamboree: Blessing of the Animals
          </p>
        </div>
      </section>
    </div>
  )
}

export default Events
