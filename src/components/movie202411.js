import React from "react"
import * as styles from "./movie202411.module.css"
import { StaticImage } from "gatsby-plugin-image"
const Movie202411 = () => {
  return (
    <div className={styles.outerContainer} id="movie">
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Matinee Movie</h1>
        <p className={styles.text}>Sunday November 17</p>
        <p className={styles.text}>2 pm</p>
      </div>
      <div className={styles.youtubeVideoContainer}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jLTxUBCbLiQ?si=qpU4fWi2ZZVpqOyu"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>A Case for Love</h1>
      </div>
      <div className={styles.textContainer}>
        <p className={styles.smallText}>
          Our society is more divided than ever. Many have moved into tribal
          corners, seeing the world from an “us versus them” point of view.
        </p>
        <p className={styles.smallText}>
          The teachings and writings of Bishop Michael Curry, most well-known
          for his passionate sermon about “The Power of Love” at the royal
          wedding of Prince Harry and Meghan Markle, inspire A CASE FOR LOVE.
        </p>
        <p className={styles.smallText}>
          This feature-length documentary examines the question of whether or
          not love, specifically—unselfish—love, is the solution to the extreme
          societal and political divide facing the world.
        </p>
        <p className={styles.smallText}>
          In the documentary, our film team travels the U.S. searching for
          people living their lives selflessly and interviews them about how
          that way of living affects others and themselves.
        </p>
        <p className={styles.smallText}>
          We also interview random people on the street, discussing where
          they’ve witnessed unselfish love and where they’ve seen its absence.
        </p>
        <p className={styles.smallText}>
          We also learn what well-known figures, including Pete Buttigieg, Al
          Roker, Sam Waterston, John Danforth, Becca Stevens, Jon Meacham,
          Russell Moore, Kelly Brown Douglas, and Jim Clyburn, have to say about
          the topic.
        </p>
        <p className={styles.smallText}>
          Finally, Bishop Michael Curry places all we’ve seen into context.
          Subjects explored: Racial Justice, Sexual Identity, Military Service,
          Foster Care, Politics, Sexual Trafficking, Disability, Loss of Loved
          Ones, Refugees, Volunteering, Food Justice and more.
        </p>
        <p className={styles.smallText}>
          What’s the verdict on “A Case for Love“? Is unselfish love the
          antidote to what ails us? Decide for yourself!
        </p>
      </div>
    </div>
  )
}

export default Movie202411
