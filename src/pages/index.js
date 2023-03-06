import * as React from "react"

import Layout from "../components/layout"
import Projects from "../components/projects"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h2>Main Content</h2>
    <Projects />
  </Layout>
)

export const Head = () => <Seo title="Front-End Web Developer" />

export default IndexPage
