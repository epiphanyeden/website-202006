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
import AnnualMeeting2026 from "./annualMeeting2026"
import AshWednesday2026 from "./ashWednesday2026"
import ShroveTuesday2026 from "./shroveTuesday2026"

// import NourishingHope202511 from "./nourishingHope202511"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <WhatIsEpiscopal />
      <AnnualMeeting2026 />
      <ShroveTuesday2026 />
      <AshWednesday2026 />
      <ChildrenChurch />
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
