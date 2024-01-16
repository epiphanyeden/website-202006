import React from "react"
import * as styles from "./announcements.module.css"

const Announcements = () => {
  return (
    <div className={styles.container} id="announcements">
      <div className={styles.announcement}>
        <h1>Humanitarian Response to the Crisis in Ukraine</h1>
        <div className={styles.text}>
          <p>
            Episcopal Relief & Development(ERD) is mobilizing with Anglican
            agencies and other partners in order to provide humanitarian
            assistance to people fleeing the violence in Ukraine.
          </p>
          <p>
            For more information and to find out how you can help, please visit{" "}
            <span>
              <a href="https://www.episcopalrelief.org/press-resources/press-releases/2022-press-releases/supporting-humanitarian-response-to-the-crisis-in-ukraine/">
                the ERD website{" "}
              </a>
            </span>
            .
          </p>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className={styles.announcement}>
        <h1>The Mission Strategy</h1>
        <div className={styles.text}>
          <p>
            The mission strategy of the Diocese of North Carolina is a
            grassroots, organic plan that invites every member of the Diocese to
            be a part of it.
          </p>
          <p>
            The mission strategy is not a starting point; rather, it is built
            upon the work done throughout the diocese over the course of years.
            It is not a first step; it is our next step on our collective
            journey to Becoming Beloved Community.
          </p>
          <p>
            To find out more about the mission strategy, visit{" "}
            <span>
              <a href="https://www.episdionc.org/mission-strategy/">
                the mission strategy page on the diocesan website{" "}
              </a>
            </span>
            .
          </p>
          <br></br>
          <br></br>
        </div>
      </div>

      <div className={styles.announcement}>
        <h1>Afghan Refugees - How to Help</h1>
        <div className={styles.text}>
          <p>
            Potentially hundreds of Afghan refugees will be resettling in the
            Triad in the coming days or weeks.
          </p>
          <p>
            CWS-Greensboro (Church World Services) is a leader in the
            resettlement effort.
          </p>
          <p>
            Visit{" "}
            <span>
              <a href="https://cwsgreensboro.org/protecting-afghan-refugees-at-risk/">
                the CWS website{" "}
              </a>
            </span>
            for more information on how you can help.
          </p>
          <p>
            Episcopal Migration Ministries(EMM) is also helping nationally.
            Visit{" "}
            <span>
              <a href="https://episcopalmigrationministries.org/afghan-allies/">
                the EMM site{" "}
              </a>
            </span>
            for more information.
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>Keep up with the diocese</h1>
        <div className={styles.text}>
          <p>
            Sometimes it is easy for us to forget that Church of the Epiphany is
            part of the Diocese of North Carolina.
          </p>
          <p>
            Our diocese is very active providing resources, information and
            opportunities for Epiphany and each of us as individuals. As does
            the
            <span>
              <a href="https://www.episcopalchurch.org/">
                {" "}
                national Episcopal church.
              </a>
            </span>
          </p>
          <p>
            Please take a few minutes to visit the Diocese of North Carolina web
            site at{" "}
            <span>
              <a href="https://www.episdionc.org/">
                https://www.episdionc.org/
              </a>
            </span>{" "}
            and poke around a bit.
          </p>
          <strong>Pro tip: </strong>
          Cruise over to the
          <span>
            <a href="https://www.episdionc.org/publications/"> Publications </a>
          </span>
          page and make sure you are on the list to get "The Disciple" magazine
          and the "Please Note" weekly email.
          <br></br>
          <br></br>
        </div>
      </div>
      <div className={styles.announcement}>
        <h1>Sunday School - on Tuesdays!!</h1>
        <div className={styles.text}>
          <p>Sunday School is on Tuesdays at 7 pm. We meet for about 1 hour.</p>
          <p>
            We watch and discuss one episode of The Chosen. If you are not
            familiar with The Chosen, check it out{" "}
            <a href="https://www.angel.com/watch/the-chosen"> here.</a>
          </p>
          <p>
            It is very informal. It is not uncommon for the discussions to
            wander a bit, which is ok.
          </p>
          <p>We hope you will join us.</p>
          <p>
            We meet over Zoom. The link is{" "}
            <a href="https://us02web.zoom.us/j/86264215594">here.</a>
          </p>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  )
}

export default Announcements
