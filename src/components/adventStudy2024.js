import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./adventStudy2024.module.css"

const adventStudy2024 = () => {
  return (
    <div>
      <div id="advent" className={styles.main}>
        <h1 className={styles.heading1}>Advent Study</h1>
        <h2 className={styles.heading2}>Thursdays 10 am </h2>
        <h2 className={styles.heading2}>Dec 5, 12, 19</h2>
        <h2 className={styles.heading2}>
          Hosted by Leaksville United Methodist Church
        </h2>
        <section className={styles.imageContainer}>
          <StaticImage
            src="../../content/assets/theChristmasLetters.jpg"
            alt="The Christmas Letters Book Cover"
            loading="eager"
            className={styles.image}
            // width={600}
            // height={800}
          />
        </section>
        <p className={styles.text}>
          Contact Pastor Lauren at &#20;
          <a href="tel:3366233418" target="_blank">
            336-623-3418
          </a>
          &#20; or &#20;
          <a href="mailto:lsims-salata@wnccumc.net" target="_blank">
            lsims-salata@wnccumc.net
          </a>
          &#20; to sign up and reserve a book!
        </p>
        <p className={styles.text}>
          You may or may not know the story of your birth. If you do, there is
          something special about hearing your origin story again and
          remembering how it all began for you.
        </p>
        <p className={styles.text}>
          That’s why we observe Advent: to celebrate how it all began for us.
        </p>
        <p className={styles.text}>
          In The Christmas Letters, Magrey deVega invites you to hear about the
          miracle of Christ’s birth from those who first told the story.{" "}
        </p>
        <p className={styles.text}>
          The letters in the New Testament, known as the Epistles, contain the
          first attempts by the church to understand and celebrate the mystery
          of the Incarnation. They point us to the origins of what we believe
          about Jesus, fully human and fully divine.{" "}
        </p>
        <p className={styles.text}>
          By spending time with these holy, ancient words this Advent, you’ll
          come to know the meaning of Christ’s coming like never before.
        </p>
        <p className={styles.text}>
          Join us as we journey through Advent along with the letters of Romans,
          1 John, Philippians, and Colossians.
        </p>
        {/* <section className={styles.container}>
          <h2 className={styles.heading2}>
            During Coffee Hour after the 10 am service
          </h2>
          <p className={styles.text}>
            If you have any greens or gardening scissors, please bring them
            along.
          </p>
        </section> */}
      </div>
    </div>
  )
}
export default adventStudy2024
