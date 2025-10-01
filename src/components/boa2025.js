import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "./boa2025.module.css"

const BOA2025 = () => {
  return (
    <div id="boa" className={styles.main}>
      <section className={styles.imageContainer}>
        <StaticImage
          src="../../content/assets/boa2025.jpg"
          alt="Blessing of the Animals Info"
          loading="eager"
          className={styles.image}
          width={1000}
        />
      </section>
      <section className={styles.textContainer}>
        <div className={styles.event}>
          <p className={styles.eventDate}>
            Sunday, October 5, from 2:30 to 5:00 PM, everyone is invited to the
            front yard of Church of the Epiphany for our Genesis Jamboree and
            Blessing of the Animals in honor of the Feast Day of St. Francis.
          </p>
          <p>
            Bring your pets—dogs, cats, birds, even stuffed animals or
            photos—for a short service and a personal blessing.
          </p>
          <p>
            There will be refreshments for both pets and people, raffles,
            contests, giveaways, and special guests from Friends of Eden Animal
            Rescue.{" "}
          </p>
          <p>
            And don’t miss our two special visitors—two goats, who will also be
            part of the fun! Goat cheese made from their milk will be available
            for sale.{" "}
          </p>
          <p>
            It’s going to be a joyful afternoon celebrating God’s creatures
            great and small. Please join us and bring a friend!
          </p>
          {/* <p>🐾 GENESIS JAMBOREE & BLESSING OF THE ANIMALS 🐾</p>
          <p> 📅 Sunday, Oct. 5 | 🕑 2:30–5:00 PM </p>
          <p>📍 Church of the Epiphany </p>
          <p>
            – Front Yard Bring your furry, feathered, or even stuffed friends
            for an afternoon of joy, blessings, and community!
          </p> */}
          {/* <p>✨ What’s happening:</p>
          <p> 🐶 Short service & individual pet blessings </p>
          <p>🍪 Refreshments (for pets & humans) </p>
          <p>🎟️ Raffles, giveaways & contests </p>
          <p>🐾 Special guests: Friends of Eden Animal Rescue </p>
          <p>
            🐐 Two goats will be joining us—plus goat cheese made from their
            milk available for sale!{" "}
          </p>
          <p>
            💜 A joyful celebration of St. Francis Day and the bond we share
            with all living creatures.
          </p>
          <p> 📸 Don’t forget your pets (or their pictures)!</p> */}
          <p> Everyone is welcome.</p>
        </div>
      </section>
    </div>
  )
}
export default BOA2025
