import React from "react"
import * as styles from "./creation2023.module.css"
import { StaticImage } from "gatsby-plugin-image"

const Creation2023 = () => {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.imageContainer} id="vbs">
        <StaticImage
          src="../../content/assets/SeasonOfCreation2023.png"
          alt="Vaction Bible School"
          loading="eager"
          object-fit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.heading2}>
          We are celebrating the Season of Creation through October 4.
        </h1>
        <h2 className={styles.heading2}>
          Join us as we celebrate with many churches around the world.
        </h2>
        <h2 className={styles.heading2}>
          Visit the <a href="https://seasonofchange.org">Season of Change</a>{" "}
          website for more information.
        </h2>
        <p className={styles.text}>
          Prophet Amos cries out: “But let justice roll on like a river,
          righteousness like a never-failing stream!” (Amos 5: 24) and so we are
          called to join the river of justice and peace, to take up climate and
          ecological justice, and to speak out with and for communities most
          impacted by climate injustice and the loss of biodiversity.{" "}
        </p>{" "}
        <p className={styles.text}>
          As the people of God, we must work together on behalf of all Creation,
          as part of that mighty river of peace and justice.
        </p>
      </div>
    </div>
  )
}

export default Creation2023
