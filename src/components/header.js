import * as React from "react"
import { Link } from "gatsby"

import "../styles/header.css"

import heroImage from "../images/penguin-header.png"

const Header = ({ siteTitle }) => {
  const menuLinks = [
    {
      text: "About",
      url: "/about"
    },
    {
      text: "Services",
      url: "/services"
    },
    {
      text: "Work",
      url: "/work"
    },
    {
      text: "Contact",
      url: "/contact"
    }
  ]
  
  return (
    <header>
      <nav>
        <div className="nav-container container">
          <div className="menu-left"></div>
          <div className="menu-middle">
            <h2>Site Logo</h2>
            <div className="menu-links">
              {menuLinks.map(link => (
                <Link to={link.url} key={link.url}>{link.text}</Link>
              ))}
            </div>
          </div>  
          <div className="menu-right"></div>      
        </div>
      </nav>
      <div className="hero-container container">
        <div className="hero-img">
          <img src={heroImage} alt="penguin in a top hat on a laptop" />
        </div>        
      </div>
    </header>    
  )
}

export default Header
