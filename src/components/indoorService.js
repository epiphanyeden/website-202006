import React from "react"
import * as styles from "./indoorService.module.css"

const IndoorService = () => {
  return (
    <div className={styles.container} id="indoor">
      <div className={styles.messageTop}>
        <div className={styles.message}>
          <h1>Sunday Service</h1>
          {/* <h1> 8:30 am Masks Required</h1> */}
          <h1>10:00 am</h1>
        </div>
        <div>
          <div className={styles.text}>
            <p>The Sunday Service is at 10 am.</p>
            <p>We hope you'll join us in person each Sunday. </p>
            <p>
              If you aren't able to attend, please watch the service live or
              recorded on
              <span>
                <a href="https://www.facebook.com/epiphanyeden"> Facebook</a> or{" "}
                <a href="https://www.youtube.com/channel/UCQhee_wvQ62Bcv5lr2ftGVg">
                  {" "}
                  YouTube
                </a>
              </span>
            </p>
            <p>Or use the links below.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndoorService
