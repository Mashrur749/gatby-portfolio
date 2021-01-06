import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"


const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}`




const Hero = () => {
  const {file:{childImageSharp:{fluid}}} = useStaticQuery(query)

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>Hi, I'm Mashrur</h1>
            <h4 className="hero-tagline">a full-stack developer, <br/>I will help you turn your ideas into reality. </h4>
            <Link to="/contact" className="btn">
              CONTACT ME
            </Link>
            <SocialLinks/>
          </div>

        </article>
        <Image fluid={fluid} className="hero-img"/>
      </div>
    </header>
  )
}

export default Hero
