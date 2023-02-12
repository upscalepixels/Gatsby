import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "../styles/layout.css"
import "../styles/reset.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="layout-container">
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>
          <div className="container">
            {children}
          </div>
        </main>
      <Footer />
    </div>
  )
}

export default Layout
