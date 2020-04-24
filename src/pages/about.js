import React from "react"
import { Link, graphql } from "gatsby"
import { useNavigate } from "@reach/router"

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Container, Column, Tab } from 'rbx'
import HeaderWithTabs from "../components/HeaderWithTabs"

export const About = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title
  const navigate = useNavigate()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About The Team at Mystic" />

      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Who We Are"
          subtitle="Our team is dedicated to making your project successful"
          selectedTab="Overview"
          tabs={[
            { name: 'Overview', location: '/about'},
            { name: 'Team', location: '/about/team'},
            { name: 'Philosophy', location: '/about/tos'},
            { name: 'Careers', location: '/about/careers'},
            { name: 'Process', location: '/about/process'},
          ]}
      />

      <Container>

        <Title>Yeah.</Title>
      </Container>
    </Layout>
  )
}


export default About

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fixed(width: 300, height: 300) {
        ...GatsbyImageSharpFixed
      }
    }
  }`

export const pageQuery = graphql`
  query {
    AndrewLombardi: file(relativePath: { eq: "about/andrew_lombardi.jpg" }) {
      ...squareImage
    }
    JohnCatalina: file(relativePath: { eq: "about/john_catalina.jpg" }) {
      ...squareImage
    }
    JakeMasters: file(relativePath: { eq: "about/jake_masters.jpg" }) {
      ...squareImage
    }
    RyanSadler: file(relativePath: { eq: "about/ryan_sadler.jpg" }) {
      ...squareImage
    }
    header: file(relativePath: { eq: "about/two-woman-and-one-man-looking-at-the-laptop-1036641.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 500, fit: CONTAIN, duotone: { highlight: "#ffffff", shadow: "#ffffff", opacity: 50}) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
