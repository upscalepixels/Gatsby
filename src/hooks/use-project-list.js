import { useStaticQuery, graphql } from "gatsby";

export const useProjectList = () => {
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
    return projectList.allMdx.edges
}