import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default ({data}) => {

  console.log(data)

  const {
    allStrapiProjects:{nodes: projects},
    allStrapiBlogs:{nodes: blogs}
  } = data;

  return (
    <Layout>
      <SEO title="home" description="This is the home page of Musaddiqur Rahman(Mashrur)'s portfolio"/>
      <Hero/>
      <Services/>
      <Jobs/>
      <Projects projects={projects} title="featured project" showLink/>
      {/*<Blogs title="latest articles" blogs={blogs} showLink/>*/}
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
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
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
          id
          slug
          title
          description
          date(formatString: "MMMM Do, YYYY")
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        
      }
    }
  }
`

