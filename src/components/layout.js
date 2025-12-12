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
import Events from "./events"
import WhatIsEpiscopal from "./whatIsEpiscopal"
import ChildrenChurch from "./childrenChurch"
import Pledge2026 from "./pledge2026"

import FoodDrive2025 from "./foodDrive2025"
import ChiliCookoff2026 from "./chilicookoff2026"

// import NourishingHope202511 from "./nourishingHope202511"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <WhatIsEpiscopal />
      <FoodDrive2025 />
      <ChiliCookoff2026 />

      <ChildrenChurch />
      {/* <NourishingHope202511 /> */}
      <LaundryLove />
      <BellTowerTreasures />
      <Pledge2026 />
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
