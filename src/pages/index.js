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

import "./styles.scss"

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
        style={{ minHeight: '480px'}}
        fluid={data.sliders.childImageSharp.fluid}
        alt="slider"
      >

        <Column.Group style={{ padding: '3rem'}}>
          <Column offset={7}>
              <Title>NEW BOOK BEGINNING SPRING 5!</Title>
              <Title size={5}>OUR SECOND BOOK, AND WE THINK YOU'LL LOVE IT!</Title>

              <Button onClick={() => { window.open('https://beginningspring5.com')}}>Buy It Today</Button>
          </Column>
        </Column.Group>

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

        <Column.Group>
          <Column style={{padding: '3rem'}}>
              <Image
                fixed={data.budapestLion.childImageSharp.fixed}
                alt="Budapest Lion"
              />

          </Column>
        
          <Column style={{padding: '3rem', paddingLeft: '0rem'}}>
              <Title className="whiteText">Who We Are</Title>
              <p className="whiteText">Our team is a dedicated group of technologists and business-minded folks who have a passion for solving 
                business needs with tech-based solutions. Headed by our geek in charge Andrew Lombardi, the group has created 
                solutions for companies as large as Walmart and Motorola, to the yoga teacher just looking for a some help with 
                her website. Over the last 10 years our team has also spoken at venues around the world, teaching developers 
                how to better use their tools, and imparting wisdom about best practices for using them. We're excited to work 
                with our clients, as we feel it is a partnership that we grow together. We look forward to talking about your 
                needs, and seeing if we can build something great together.          
              </p>
          </Column>
        </Column.Group>
      </BackgroundImage>

      <div className="greyBg" style={{minHeight: '75px'}}>
        hi there
      </div>
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