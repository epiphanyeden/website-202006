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
          <p className={styles.eventDate}>Feb 21</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Lenten Study @ St. Thomas</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Feb 21</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Feb 28</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Lenten Study @ St. Thomas</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Feb 28</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>March 2</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 6</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Lenten Study @ Epiphany</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Mar 6</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div> */}
        <div className={styles.event}>
          <p className={styles.eventDate}>March 9</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 13</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>
            Coffee and Conversation @ St. Luke's
          </p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 13</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 20</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;11 am - Noon
          </p>
          <p className={styles.eventDesc}>Coffee and Conversation @ Epiphany</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 20</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 21</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 5:30 pm
          </p>
          <p className={styles.eventDesc}>
            Solace Seekers (Grief Support Group)
          </p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 24</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Palm Sunday Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 27</p>
          <p className={styles.eventDay}>
            Wed&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6 pm
          </p>
          <p className={styles.eventDesc}>Taize Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 28</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 7 pm
          </p>
          <p className={styles.eventDesc}>
            Maundy Thursday Communion and Foot Washing
          </p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 29</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon
          </p>
          <p className={styles.eventDesc}>Good Friday Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 29</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 5:30 pm
          </p>
          <p className={styles.eventDesc}>Stations of the Cross</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 29</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 7 pm
          </p>
          <p className={styles.eventDesc}>Tenebrae @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 30</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 8 pm
          </p>
          <p className={styles.eventDesc}>Easter Vigil Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 31</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday Service</p>
        </div>
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
