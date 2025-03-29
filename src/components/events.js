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
        <div className={styles.event}>
          <p className={styles.eventDate}>Mar 30</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; Noon - 2 pm
          </p>
          <p className={styles.eventDesc}>Nourishing Hope</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 5</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 11 am
          </p>
          <p className={styles.eventDesc}>Laundry Love</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 12</p>
          <p className={styles.eventDay}>
            Sat&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 9 am - 1 pm
          </p>
          <p className={styles.eventDesc}>Bell Tower Treasures</p>
        </div>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 13</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Palm Sunday Service</p>
        </div>
        {/* Maunday Thursday */}
        <section>
          <div className={styles.event}>
            <p className={styles.eventDate}>April 17</p>
            <p className={styles.eventDesc}>Maundy Thursday Services</p>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 5 pm
            </p>
            <p className={styles.eventDesc}>
              St. Thomas Reidsville - Bishop Gregg
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 6:30 pm
            </p>
            <p className={styles.eventDesc}>
              Leaksville UMC - Rev. Lauren Sims-Salata
            </p>
          </div>
          <div className={styles.event}></div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 7:30 pm
            </p>
            <p className={styles.eventDesc}>
              Holy Trinity - Greensboro - Bishop Curry
            </p>
          </div>
          {/* End Maunday Thursday */}
        </section>
        {/* Good Friday Services */}
        <section>
          <div className={styles.event}>
            <p className={styles.eventDate}>April 18</p>
            <p className={styles.eventDesc}>Good Friday Services</p>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; Noon
            </p>
            <p className={styles.eventDesc}>
              Epiphany - Rev. Lauren Sims-Salata
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 6:30 pm
            </p>
            <p className={styles.eventDesc}>
              Tennebrae - Leaksville UMC - Rev. Lauren Sims-Salata
            </p>
          </div>
          <div className={styles.event}></div>
          {/* End Good Friday */}
        </section>
        <section>
          {/* Great Vigil of Easter Service */}
          <div className={styles.event}>
            <p className={styles.eventDate}>April 19</p>
            <p className={styles.eventDesc}>Great Vigil of Easter Services</p>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 5pm
            </p>
            <p className={styles.eventDesc}>
              St. Thomas, Reidsville - Bishop Gregg
            </p>
          </div>
          <div className={styles.event}>
            <p className={styles.eventDay}>
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 7:30 pm
            </p>
            <p className={styles.eventDesc}>
              Holy Trinity, Greensboro - Bishop Curry
            </p>
          </div>
          <div className={styles.event}></div>
          {/* End Maunday Thursday */}
        </section>
        <div className={styles.event}>
          <p className={styles.eventDate}>April 20</p>
          <p className={styles.eventDay}>
            Sun&nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; 10 am
          </p>
          <p className={styles.eventDesc}>Easter Sunday Service</p>
          <p className={styles.eventDesc}>Epiphany - Rev. Virginia Heistand</p>
        </div>
      </section>
    </div>
  )
}

export default Events
