import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import "../styles/projects.css"

export const ProjectList = () => {
    const projectList = useStaticQuery(
        graphql`
        query projectList {
            allMdx(filter: {internal: {}, frontmatter: {type: {eq: "project"}}}) {
              edges {
                node {
                  id
                  frontmatter {
                    slug
                    title
                    cover {
                      childImageSharp {
                        gatsbyImageData(width: 800)
                      }
                    }
                  }
                  internal {
                    contentFilePath
                  }
                }
              }
            }
          }
        `
    )
    const results = projectList.allMdx.edges

    return (
      <>      
        <div className="project-container">
          {results.map(({ node }) => (
            <div className="project-item" key={node.id}>
              <Link to={node.frontmatter.slug}>              
                <h2>{node.frontmatter.title}</h2>
                <GatsbyImage image={getImage(node.frontmatter.cover?.childImageSharp?.gatsbyImageData)} />
              </Link>
            </div>
          ))}
        </div>
      </>
    )
}