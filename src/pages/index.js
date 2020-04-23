import React from "react"
import { useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Image from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

import { Level, Title, Section } from 'rbx'

import { FaDatabase } from "react-icons/fa"
import { IoIosMail } from 'react-icons/io'

import "rbx/index.css"

import { Button, Column } from 'rbx'

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

      <div style={{ width: '100%', backgroundSize: 'cover'}}>
      <BackgroundImage
        Tag="section"        
        fluid={data.sliders.childImageSharp.fluid}
        alt="slider"
      >

        <div style={{padding: '3rem'}}>

            <Title>NEW BOOK BEGINNING SPRING 5!</Title>
            <Title size={5}>OUR SECOND BOOK, AND WE THINK YOU'LL LOVE IT!</Title>

            <Button>Buy It Today</Button>
        </div>
      </BackgroundImage>
      </div>

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


      <BackgroundImage
        Tag="section"        
        fluid={data.whoWeAreBg.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        alt="who we are"
      >

        <div style={{padding: '3rem'}}>
          <Image
          fixed={data.budapestLion.childImageSharp.fixed}
          alt="Budapest Lion"
          />
        </div>
      </BackgroundImage>

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