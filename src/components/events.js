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

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>April 5</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday</p>
          <p className={styles.eventDesc}>The Rev. Virginia Heistand</p>
          <p className={styles.eventDesc}></p>
        </div> */}

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>March 14</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div> */}

        {/* <div className={styles.event}>
          <p className={styles.eventDate}>April 11</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 12</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9:45 am
          </p>
          <p className={styles.eventDesc}>Children's Church</p>
        </div> */}
        <div className={styles.event}>
          <p className={styles.eventDate}>April 19</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>
            Sunday Service w/ The Rev. Lito Santos
          </p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 21</p>
          <p className={styles.eventDay}>
            Tue&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 7 pm
          </p>
          <p className={styles.eventDesc}>
            Sunday School - The Gospel of John
            <a
              href="https://epiphanyeden.us17.list-manage.com/track/click?u=a3f429c9b2ab91d27de19f6cd&id=17499a8496&e=19e2f816a5"
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; Join Zoom
            </a>
          </p>
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
