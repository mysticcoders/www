import React from "react"
import { Link, graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Title, Container, Column } from 'rbx'

export const Covid19 = ({ data, location }) => {

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
        Hey there
      </Container>
    </Layout>
  )
}


export default Covid19

export const pageQuery = graphql`
  query {
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
