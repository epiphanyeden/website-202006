import React from "react"
import * as styles from "./vbs2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const VBS2023 = () => {
  return (
    <div>

      <div className={styles.imageContainer} id="vbs">
        <StaticImage
          src="../../content/assets/vbs2023.jpg"
          alt="Vaction Bible School"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.container}>
      <h1 className={styles.title}>
        Vacation Bible School 2023
      </h1>
      <h1 className={styles.title}>
          Live and In-Person
        </h1>
        <h1 className={styles.title}>
          Hosted by Epiphany and Leaksville United Methodist
        </h1>
        <h1 className={styles.title}>
         Sunday July 30 4 pm -  Splash Pad at Freedom Park
        </h1>
        <h1 className={styles.title}>
         Mon July 31 - Wed August 2 from 4:45 pm to 7:30 pm
        </h1>
        <figure className={styles.quote}>
          <blockquote>
            "So let’s strive together for the things that bring peace and the
            things that build each other up."
          </blockquote>
          <figcaption>Romans 14:19</figcaption>
        </figure>
     
      
        <h2 className={styles.text}>
          All children age 3 through rising 6th Grade are invited to attend!
        </h2>
        <p className={styles.smallText}>(age 3 by July 1 and potty-trained)</p>

        <p className={styles.text}>
          While here at Hero Hotline - Children will become Heroes and discover
          how :
        </p>
        <p className={styles.text}>
          Everyone's gifts are valued, and every Hero has a role to play !
        </p>
        <p className={styles.text}>
          VBS will be held at LUMC - 603 Henry St. Eden
        </p>
        <p className={styles.text}>
          VBS Kickoff and Pre-Registration is Sunday July 30 at 4:00 pm at
          Splash Pad - Freedom Park - Eden.
        </p>
        <p className={styles.text}>
          Registration each VBS night begins at 4:45 pm.
        </p>
        <p className={styles.text}>Light dinner will be served each night.</p>
        <p className={styles.text}>
          VBS programming is from 5:15 pm - 7:30 pm on Monday 07/31 - Wednesday
          08/02 !{" "}
        </p>
        <p className={styles.text}>
          If you have any questions - please email or call Deb Norton
          epiphanyleaksvillevbs@gmail.com 276-779-4006
        </p>
      </div>
    </div>
  )
}

export default VBS2023
