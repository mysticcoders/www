import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderWithTabs from '../../components/HeaderWithTabs'
import GetInTouchBlock from '../../components/GetInTouchBlock'
import AboutMenus from '../../constants/about_menus.json'

import { Title, Container } from 'rbx'

export const Philosophy = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Our Guiding Philosophy at Mystic" />

      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Philosophy"
          subtitle="..."
          selectedTab="Philosophy"
          tabs={AboutMenus}
      />

      <Container>
          <Title>To Our Success!</Title>
          <p>
            The Mystic team follows a five-step process for our engagements with clients. This ensures that we’ve accurately completed every stage necessary to bring about a successful project. And we’re mystics, so our process takes on the basic elements of the magical universe.
          </p>

          <GetInTouchBlock />

      </Container>
    </Layout>
  )
}

export default Philosophy

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
    header: file(relativePath: { eq: "about/photo-of-people-holding-each-other-s-hands-3184434.jpg" }) {
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
