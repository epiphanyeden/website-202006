import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import ServicesHeader from "./servicesHeader"
import LaundryLove from "./laundryLove"
import TextSignUp from "./textSignUp"
import BellTowerTreasures from "./bellTowerTreasures"
import Gift2024 from "./gift2024"
import Events from "./events"
import WhatIsEpiscopal from "./whatIsEpiscopal"
import Marion20250622 from "./marion20250622"
import NourishingHope202506 from "./nourishingHope202506"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <WhatIsEpiscopal />
      <LaundryLove />
      <BellTowerTreasures />
      <Marion20250622 />
      <NourishingHope202506 />
      <Gift2024 />
      <ChurchLinks />
      <Announcements />
      <ServicesHeader />
      <Services />
      <Donations />
      <TextSignUp />
      <Footer />
    </div>
  )
}

export default Layout
