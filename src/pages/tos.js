import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from 'gatsby-image'

import { Title, Level, Container, Column } from 'rbx'
import { IoIosPeople } from 'react-icons/io'

export const ToOurSuccess = ({ data, location }) => {

    const HeaderWithParagraph = ({title, subtitle, text}) => (
        <>
            <Title size={4} style={{marginBottom: '0'}}>{title}</Title>
            <em>{subtitle}</em>
            <p style={{marginTop: '1rem'}}>
                {text}
            </p>
        </>
    )

    const siteTitle = data.site.siteMetadata.title
    const queryData = useStaticQuery(pageQuery)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="To Our Success at Mystic" />

      <Level style={{marginTop: '5rem'}}>
        <Level.Item>
            <IoIosPeople size="5rem" />
        </Level.Item>
      </Level>
      <Level style={{ marginBottom: '0.5em'}}>
        <Level.Item>
            <Title>To Our Success!</Title>
        </Level.Item>
      </Level>
      <Container>
          <p>
            The Mystic team follows a five-step process for our engagements with clients. This ensures that we’ve accurately completed every stage necessary to bring about a successful project. And we’re mystics, so our process takes on the basic elements of the magical universe.
          </p>

      </Container>
    </Layout>
  )
}

export default ToOurSuccess

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
    air: file(relativePath: { eq: "process/air.jpg" }) {
        ...squareImageFluid
    }
    fire: file(relativePath: { eq: "process/fire.jpg" }) {
        ...squareImageFluid
    }
    water: file(relativePath: { eq: "process/water.jpg" }) {
        ...squareImageFluid
    }
    earth: file(relativePath: { eq: "process/earth.jpg" }) {
        ...squareImageFluid
    }
    spirit: file(relativePath: { eq: "process/spirit.jpg" }) {
        ...squareImageFluid
    }  
    site {
      siteMetadata {
        title
      }
    }
  }
`
