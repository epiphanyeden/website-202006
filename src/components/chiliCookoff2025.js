import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./chiliCookoff2025.module.css"

const ChiliCookoff2025 = () => {
  const linkUrl = "https://mailchi.mp/b89031631e80/chili-cookoff-2025"

  return (
    <div id="chiliCookoff">
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/chiliCookoff2025.jpg"
          alt="Chili Cookoff 2025"
          loading="eager"
          className={styles.image}
          width={600}
        />
      </section>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.moreInfoButton}
      >
        More Info
      </a>
    </div>
  )
}
export default ChiliCookoff2025
