import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from 'gatsby-image'

import { Level, Title, Section } from 'rbx'

import { FaDatabase } from "react-icons/fa"
import { IoIosMail } from 'react-icons/io'

import "rbx/index.css"

export const IndexPage = ({location}) => {

  const siteTitle = "Andrew Lombardi"

  const data = useStaticQuery(pageQuery)

  console.dir(data)
  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <Image
        fluid={data.sliders.childImageSharp.fluid}
        alt="Slider"
      />

      <Section>

      <Level>
        <Level.Item>
            <FaDatabase size="3rem" />
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Title>Why Choose Us</Title>
        </Level.Item>
      </Level>

      </Section>

      <Image
        fluid={data.bg.childImageSharp.fluid}
        alt="bg"
      />

      <Image
        fixed={data.budapestLion.childImageSharp.fixed}
        alt="Budapest Lion"
      />

      <Image
        fluid={data.whoWeAreBg.childImageSharp.fluid}
        alt="who we are"
      />

      <Level>
        <Level.Item>
            <IoIosMail size="3rem" />
        </Level.Item>
      </Level>

    </Layout>
  )
}


export default IndexPage

export const pageQuery = graphql`
  query {
    sliders: file(relativePath: { eq: "sliders/slide-3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 530) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    bg: file(relativePath: { eq: "bg-1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 530) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    whoWeAreBg: file(relativePath: { eq: "who-we-are-bg.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1600, maxHeight: 530) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    budapestLion: file(relativePath: { eq: "budapest-lion.jpg" }) {
      childImageSharp {
        fixed(width: 511, height: 341) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`