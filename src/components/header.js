import React, { useState } from "react"
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

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header>
      <nav>
        <div className="nav-container container">
          <div className="menu-left"></div>
          <div className="menu-middle">
            <div className="inner-nav-container">
              <h2>Site Logo</h2>
              <div className="menu-links">
                {menuLinks.map(link => (
                  <Link to={link.url} key={link.url}>{link.text}</Link>
                ))}
              </div>
              <div className="menu-toggle" aria-hidden="true" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <span className="material-symbols-outlined">&#xe5d2;</span>
              </div>              
            </div>
          </div>  
          <div className="menu-right"></div>      
        </div>
        <div className={isMenuOpen ? "mobile-menu expanded" : "mobile-menu"}>
          <div className="mobile-menu-links">
            {menuLinks.map(link => (
              <Link to={link.url} key={link.url}>{link.text}</Link>
            ))}
          </div>             
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
