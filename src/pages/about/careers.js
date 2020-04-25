import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderWithTabs from '../../components/HeaderWithTabs'
import GetInTouchBlock from '../../components/GetInTouchBlock'
import AboutMenus from '../../constants/about_menus.json'

import { Title, Container } from 'rbx'

export const Careers = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Careers at Mystic" />

      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Careers"
          subtitle="..."
          selectedTab="Careers"
          tabs={AboutMenus}
      />

      <Container>
          <Title>Careers</Title>
          <p>
            Careers at Mystic
          </p>

      </Container>

      <GetInTouchBlock />

    </Layout>
  )
}

export default Careers

export const squareImageFluid = graphql`
  fragment squareImageFluid on File {
    childImageSharp {
      fluid(maxWidth: 300, maxHeight: 300) {
        ...GatsbyImageSharpFluid
      }
    }
  }`


export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "about/group-of-people-watching-on-laptop-1595385.jpg" }) {
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
