import React from "react"
import * as styles from "./pentecost2026.module.css"
import Pentecost from "../../content/assets/Pentecost2026.jpg"

const Pentecost2026 = () => {
  return (
    <div className={styles.container} id="pentecost">
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={Pentecost}
          alt="Pentecost Celebration May 24, 2026"
          // width="1000"
          // height="1000"
        />
      </div>
    </div>
  )
}

export default Pentecost2026
