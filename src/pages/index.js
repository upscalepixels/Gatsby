import * as React from "react"
import Layout from "../components/layout"
import { ProjectList } from "../components/projects"
import Seo from "../components/seo"

const IndexPage = () => {

  return (
    <Layout>
      <h2>Hero Content</h2>
      <ProjectList />
    </Layout>
  )
}

export const Head = () => <Seo title="Front-End Web Developer" />

export default IndexPage