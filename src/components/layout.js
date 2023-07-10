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
import BloodDrive2023 from "./bloodDrive2023"
import VBS2023 from "./vbs2023"


const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <BloodDrive2023 />
      <VBS2023 />
      <BellTowerTreasures />
      <LaundryLove />
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
