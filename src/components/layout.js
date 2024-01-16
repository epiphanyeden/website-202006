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
import Bota2023 from "./bota2023"
import Gift2023 from "./gift2023"
import LitanyHolyLand from "./litanyHolyLand"
import Events from "./events"
import AnnualMeeting2024 from "./annualMeeting2024"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <AnnualMeeting2024 />
      <LaundryLove />
      <BellTowerTreasures />
      <Bota2023 />
      <LitanyHolyLand />
      <Gift2023 />
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
