import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Container, Column } from 'rbx'

export const About = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About The Team at Mystic" />


      <BackgroundImage
        Tag="section"
        style={{ minHeight: '250px'}}
        fluid={data.header.childImageSharp.fluid}
        alt="slider"
      >
        <Column.Group style={{ padding: '3rem'}} align="center">
            <Column>
                <Title className="logo-color">Who We Are</Title>
                <Title subtitle size={5}>Our team is dedicated to making your project successful</Title>
            </Column>
        </Column.Group>

      </BackgroundImage>

      <hr />

      <Container>

        <Link to={`/about/team`}>Team</Link>
        <Link to={`/about/tos`}>To Our Success</Link>
        <Link to={`/about/process`}>Our Process</Link>
        Hey there
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
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
