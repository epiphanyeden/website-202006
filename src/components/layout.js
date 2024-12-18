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
import AdventWreath2024 from "./adventWreaths2024"
import AdventStudy2024 from "./adventStudy2024"
import LongestNight2023 from "./longestNight2023"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Events />
      <LongestNight2023 />
      <AdventWreath2024 />
      <AdventStudy2024 />
      <BellTowerTreasures />
      <LaundryLove />
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
