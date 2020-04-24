import React from "react"
import { graphql } from "gatsby"

import BackgroundImage from 'gatsby-background-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Container, Content, Column } from 'rbx'

export const Contact = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Contact Us at Mystic" />


      <BackgroundImage
        Tag="section"
        style={{ minHeight: '250px'}}
        fluid={data.header.childImageSharp.fluid}
        alt="slider"
      >
        <Column.Group style={{ padding: '10rem'}} align="center">
            <Column>
                <Title className="logo-color">Contact Us</Title>
                <Title subtitle size={5}>Reach out and let us know how we can help</Title>
            </Column>
        </Column.Group>

      </BackgroundImage>

        <hr />

        <Container style={{paddingBottom: '5rem'}}>

            <Title className="logo-color">Get in Touch</Title>
            <Content>
            <p>
                At Mystic we want to help you meet the technology challenges that your company may face.
            </p>
            <p>
                Email us at <a href="mailto:talk@mysticcoders.com">talk@mysticcoders.com</a>
            </p>
            </Content>
        </Container>
    </Layout>
  )
}


export default Contact

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "about/computer-cup-desk-drink-434337.jpg" }) {
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
