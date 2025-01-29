import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import LandingPage from "./landingPage"
import Services from "./services"
import ChurchLinks from "./churchLinks"
import Donations from "./donations"
import Announcements from "./announcements"
import IndoorService from "./indoorService"
import LaundryLove from "./laundryLove"
import TextSignUp from "./textSignUp"
import BellTowerTreasures from "./bellTowerTreasures"
import Gift2024 from "./gift2024"
import LitanyHolyLand from "./litanyHolyLand"
import Events from "./events"
import WhatIsEpiscopal from "./whatIsEpiscopal"
import ShroveTuesday2025 from "./shroveTuesday2025"
import NourishingHope from "./nourishingHope"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <WhatIsEpiscopal />
      <LaundryLove />
      <BellTowerTreasures />
      <ShroveTuesday2025 />
      <NourishingHope />
      <LitanyHolyLand />
      <Gift2024 />
      <ChurchLinks />
      <Announcements />
      <IndoorService />
      <Services />
      <Donations />
      <TextSignUp />
      <Footer />
    </div>
  )
}

export default Layout
