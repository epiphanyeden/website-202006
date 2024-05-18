import React from "react"
import * as styles from "./mentalHealth2024.module.css"
import { StaticImage } from "gatsby-plugin-image"

const MentalHealth2024 = () => {
  return (
    <div className={styles.component} id="MentalHealth">
      <section className={styles.container}>
        <p>
          {/* <Link to={`/mentalHealth/`} activeStyle={{ textDecoration: "none" }}> */}
          <a
            href="https://www.nimh.nih.gov/health/topics"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../content/assets/MentalHealth2024.png"
              placeholder="blurred"
              width={1000}
              // height={600}
              formats={["auto", "webp", "avif"]}
              alt="May is Mental Health Awareness Month"
              transformOptions={{ fit: "cover", cropFocus: "attention" }}
              quality={100}
            />
          </a>
          {/* </Link> */}
        </p>
      </section>
    </div>
  )
}

export default MentalHealth2024
