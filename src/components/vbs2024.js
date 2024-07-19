import React from "react"
import * as styles from "./vbs2024.module.css"
import { StaticImage } from "gatsby-plugin-image"

const VBS2024 = () => {
  return (
    <div>
      {/* <div className={styles.imageContainer} id="vbs">
        <StaticImage
          src="../../content/assets/vbs2023.jpg"
          alt="Vaction Bible School"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div> */}
      <div className={styles.container}>
        <h1 className={styles.title}>Vacation Bible School 2024</h1>
        <h1 className={styles.title}>Live and In-Person</h1>
        <h1 className={styles.title}>Leaksville United Methodist Church</h1>
        <h1 className={styles.title}>Friday's from July 19 thru August 9</h1>
        <h1 className={styles.title}>5:30 pm until 8 pm</h1>
        <hr />

        <p className={styles.text}>July 19</p>
        <p className={styles.text}>
          Faith at Home Fair Join us for a fun family night as we kick off
          LUMC's VBS!
        </p>
        <p className={styles.text}>
          We will have a family meal for the whole family from 5:30–6, and at 6
          we will have a family event with our faith at home fair and activities
          for kids!{" "}
        </p>
        <p className={styles.text}>
          This night will be a whole family event where parents and guardians
          stay for some fun ideas and goodies for practicing faith at home. We
          hope you join us!
        </p>

        <a href="https://www.facebook.com/events/989015305969966?acontext=%7B%22event_action_history%22%3A%5B%5D%7D">
          <button className={styles.button}>More Information</button>
        </a>
        <hr />

        <p className={styles.text}>July 26</p>
        <p className={styles.text}>
          Join us for a family meal starting at 5:30pm till 6 and then Creation
          Care camp for kids!
        </p>

        <a href="https://www.facebook.com/events/2265335803803571">
          <button className={styles.button}>More Information</button>
        </a>
        <hr />

        <p className={styles.text}>August 2</p>
        <p className={styles.text}>VOCAL WORKSHOP WITH WENDY HICKMAN</p>
        <p className={styles.text}>
          Wendy Hickman, born in Asheboro, NC, and now based in Mt. Airy, shares
          her beautiful voice as both a lead and harmony singer.{" "}
        </p>
        <p className={styles.text}>
          She is well known for her work with her pedal steel guitarist husband,
          DaShawn Hickman, who is currently touring with Cirque Du Soleil. Wendy
          is a sought after background vocalist, and has appeared on albums that
          were nominated for IBG awards, National Blues awards, and Grammy
          nominations from artists including DaShawn Hickman, Anya Hinkle, Riley
          Baugus, Kevin Daniels, Trey Wellington, and Nic Clarke, just to name a
          few.{" "}
        </p>
        <p className={styles.text}>
          She provides a lot of bluegrass vocal harmonies at Crossroads Studios
          in Brevard, NC, just outside of Asheville. Wendy led a singing
          workshop at The Ashokan Center for Southern Week Camp in Olivebridge,
          NY, and says “What a joy it was to take everyone out of their comfort
          zone, and really give their singing a try – I was so amazed at the
          outcome.”{" "}
        </p>
        <p className={styles.text}>
          Come learn from Wendy and experience the joy of singing.
        </p>

        <a href="https://www.facebook.com/events/1761088624417500">
          <button className={styles.button}>More Information</button>
        </a>
        <hr />
      </div>
    </div>
  )
}

export default VBS2024
