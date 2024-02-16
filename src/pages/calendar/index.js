import React from "react"
import * as styles from "./calendar.module.css"

const CALENDAR = () => {
  return (
    <div>
      <div
        className={`${styles.responsive_iframe_container} ${styles.big_container}`}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=800&wkst=1&ctz=America%2FNew_York&bgcolor=%237986CB&src=ZXBpcGhhbnllZGVuQGdtYWlsLmNvbQ&color=%233F51B5"
          // style="border:solid 1px #777"
          width="1000"
          height="800"
          frameborder="0"
          scrolling="no"
          title="Calendar"
        ></iframe>
      </div>

      <div
        className={`${styles.responsive_iframe_container} ${styles.small_container}`}
      >
        <iframe
          src="https://calendar.google.com/calendar/embed?height=800&mode=AGENDA&wkst=1&ctz=America%2FNew_York&bgcolor=%237986CB&src=ZXBpcGhhbnllZGVuQGdtYWlsLmNvbQ&color=%233F51B5"
          // style="border:solid 1px #777"
          width="1000"
          height="800"
          frameborder="0"
          scrolling="no"
          title="Calendar"
        ></iframe>
      </div>
    </div>
  )
}

export default CALENDAR
