import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import SEO from "../components/SEO"


const ProjectsPage = ({data:{allStrapiProjects:{nodes: projects}}}) => {
  return (
    <Layout>
      <SEO title="Projects"/>
      <Projects title="projects" projects={projects}/>
    </Layout>
  )
}



export const query = graphql`
  {
    allStrapiProjects{
      nodes {
        title
        github
        id
        description
        url
        image{
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`



export default ProjectsPage
