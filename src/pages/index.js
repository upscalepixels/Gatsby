import * as React from "react";
import Layout from "../components/layout";
import { useProjectList } from "../hooks/use-project-list";
import Seo from "../components/seo";

const IndexPage = () => {
  const projectList = useProjectList();
  console.log(projectList);
  return (
    <Layout>
      <h2>Main Content</h2>
      {projectList.map(({ node }) => (
        <h2 key={node.id}>{node.frontmatter.title}</h2>
      ))}
    </Layout>
  );
};

export const Head = () => <Seo title="Front-End Web Developer" />;

export default IndexPage;