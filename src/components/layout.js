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
import BloodDrive2024 from "./bloodDrive2024"
import IceCreamSocial2024 from "./iceCreamSocial2024"
import VBS2024 from "./vbs2024"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <VBS2024 />
      <IceCreamSocial2024 />
      <BellTowerTreasures />
      <BloodDrive2024 />
      <LaundryLove />
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
