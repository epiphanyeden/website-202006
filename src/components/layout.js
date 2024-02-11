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
import Gift2023 from "./gift2023"
import LitanyHolyLand from "./litanyHolyLand"
import Events from "./events"
import PancakeSupper2024 from "./pancakeSupper2024"
import AshWednesday2024 from "./ashWednesday2024"
import LentSunday2024 from "./lentStudy2024"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <PancakeSupper2024 />
      <AshWednesday2024 />
      <LentSunday2024 />
      <LaundryLove />
      <BellTowerTreasures />
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
