import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => {
    const data = useStaticQuery(graphql`
    
    `)

    return (
        <Layout>
            <h2>Lemon Page</h2>
        </Layout>
    )
}

export default AboutPage