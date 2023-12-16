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
import Advent2023 from "./advent2023"
import Greenery2023 from "./greenery2023"
import LongestNight2023 from "./longestNight2023"

const Layout = ({ location, title, children }) => {
  return (
    <div>
      <Header />
      <LandingPage />
      <Advent2023 />
      <Greenery2023 />
      <LongestNight2023 />
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
