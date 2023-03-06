import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Projects = () => {
    const result = useStaticQuery(graphql`
    query {
        allMdx(filter: {internal: {}, frontmatter: {type: {eq: "project"}}}) {
          edges {
            node {
              id
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `)

    const projectResults = result.allMdx.edges
    console.log(projectResults)
    
    return (
        <>
            <h2>Test2</h2>
            {projectResults.forEach(item => {
                <h3>Hello</h3>
            })}
        </>
    )
}

export default Projects