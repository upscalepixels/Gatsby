/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
const path = require("path")
const projectTemplate = path.resolve(`./src/templates/project.jsx`)
const postTemplate = path.resolve(`./src/templates/post.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const projectResults = await graphql(`
    query MyQuery {
      allMdx(filter: {internal: {}, frontmatter: {type: {eq: "project"}}}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (projectResults.errors) {
    reporter.panicOnBuild('Error loading MDX result', projectResults.errors)
  }

  const projects = projectResults.data.allMdx.edges

  projects.forEach(item => {
    createPage({
      path: item.node.frontmatter.slug,
      component: `${projectTemplate}?__contentFilePath=${item.node.internal.contentFilePath}`,
      context: { id: item.node.id },
    })
  })

  const postResults = await graphql(`
    query MyQuery {
      allMdx(filter: {internal: {}, frontmatter: {type: {eq: "post"}}}) {
        edges {
          node {
            id
            frontmatter {
              slug
              title
            }
            internal {
              contentFilePath
            }
          }
        }
      }
    }
  `)

  if (postResults.errors) {
    reporter.panicOnBuild('Error loading MDX result', postResults.errors)
  }

  const posts = postResults.data.allMdx.edges

  posts.forEach(item => {
    createPage({
      path: item.node.frontmatter.slug,
      component: `${postTemplate}?__contentFilePath=${item.node.internal.contentFilePath}`,
      context: { id: item.node.id },
    })
  })

}

