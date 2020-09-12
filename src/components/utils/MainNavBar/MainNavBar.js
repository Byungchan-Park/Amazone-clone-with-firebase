import React from "react"
import RoomIcon from "@material-ui/icons/Room"
import "../style/MainNavBar.css"
import { Link } from "react-router-dom"

function MainNavBar() {
  return (
    <div className="mainNavBar">
      <div className="mainNavBar__left">
        <RoomIcon />
        <div className="left__textBox">
          <span>Deliver to</span>
          <span>Korea, Republic of</span>
        </div>
      </div>
      <ul className="mainNavBar__center">
        <li>
          <a href="#">Today's Deals</a>
        </li>
        <li>
          <a href="#">Customer Service</a>
        </li>
        <li>
          <a href="#">Gift Cards</a>
        </li>
        <li>
          <a href="#">Registry</a>
        </li>
        <li>
          <a href="#">Sell</a>
        </li>
      </ul>
      <div className="mainNavBar__right">
        <Link to="https://blog.aboutamazon.com/company-news/amazons-actions-to-help-employees-communities-and-customers-affected-by-covid-19/?_encoding=UTF8&token=GW&utm_content=COVID-19_roundup&utm_medium=swm&utm_source=gateway&utm_term=gw03162020&ref_=nav_swm_undefined&pf_rd_p=74875fb1-f1e3-4e55-9ab0-26eaad2d4e3c&pf_rd_s=nav-sitewide-msg-text-export&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=M889FBDSWVZPZD1TEAYM">
          Amazon's response to COVID-19
        </Link>
      </div>
    </div>
  )
}

export default MainNavBar
