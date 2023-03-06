import React, { useState } from "react"
import { Link } from "gatsby"

import "../styles/header.css"

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

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  return (
    <header>
      <nav>
        <div className="nav-container container">
            <Link to="/"><h2>{siteTitle}</h2></Link>
            <div className="menu-links">
              {menuLinks.map(link => (
                <Link to={link.url} key={link.url}>{link.text}</Link>
              ))}
            </div>
            <div className="menu-toggle" aria-hidden="true" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="material-symbols-outlined">&#xe5d2;</span>
            </div>              
        </div>

          <div className={isMenuOpen ? "mobile-menu-links expanded" : "mobile-menu-links"}>
            {menuLinks.map(link => (
              <Link to={link.url} key={link.url}>{link.text}</Link>
            ))}
          </div>             
   
      </nav>
    </header>    
  )
}

export default Header
