import React from "react"
import * as styles from "./events.module.css"
// import { Link } from "gatsby"

const Events = () => {
  return (
    <div className={styles.component} id="events">
      <section>
        <h1 className={styles.title}>Upcoming Events</h1>
      </section>
      {/* <section className={styles.container}>
        <p>
          <Link to={`/calendar/`}>
            <button className={styles.button}>Calendar View</button>
          </Link>
        </p>
      </section> */}
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

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Oct 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9:45 am
          </p>
          <p className={styles.eventDesc}>Children's Church</p>
        </div> */}

        {/*
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 23</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 12 pm
          </p>
          <p className={styles.eventDesc}>Food Drive</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 12 pm
          </p>
          <p className={styles.eventDesc}>Food Drive</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>Nov 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Make Advent Wreaths</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Nov 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 3:30 - 6 pm
          </p>
          <p className={styles.eventDesc}>Advent Party @ LUMC</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Nov 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon - 2 pm
          </p>
          <p className={styles.eventDesc}>Nourishing Hope</p>
        </div> */}

        <div className={styles.event}>
          <p className={styles.eventDate}>March 29</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>
            Palm Sunday - Sunday of the Passion
          </p>
          <p className={styles.eventDesc}>The Rev. Barbara Cooke</p>
          <p className={styles.eventDesc}></p>
        </div>

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>March 14</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div> */}

        <div className={styles.event}>
          <p className={styles.eventDate}>March 29</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Make Crosses during Coffee Hour</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 2</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6:30 pm
          </p>
          <p className={styles.eventDesc}>Maundy Thursday @ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 2</p>
          <p className={styles.eventDay}>
            Thu&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 7 pm
          </p>
          <p className={styles.eventDesc}>
            Maundy Thursday & Tenebrae @ St. Luke's
          </p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 3</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon
          </p>
          <p className={styles.eventDesc}>Good Friday Service @ Epiphany</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 3</p>
          <p className={styles.eventDay}>
            Fri&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 6:30 pm
          </p>
          <p className={styles.eventDesc}>Good Friday & Tenebrae@ LUMC</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 4</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9:15 am
          </p>
          <p className={styles.eventDesc}>Flowering of the Cross</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday Service</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday Brunch</p>
        </div>

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Nov 2</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>All Saints' Day Service</p>
        </div> */}
        {/* <div className={styles.event}>
          <p className={styles.eventDate}>Nov 2</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 11 am
          </p>
          <p className={styles.eventDesc}>Covered Dish Brunch</p>
        </div> */}
      </section>
    </div>
  )
}

export default Events
