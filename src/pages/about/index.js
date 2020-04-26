import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import { Content, Container } from 'rbx'
import HeaderWithTabs from "../../components/HeaderWithTabs"
import GetInTouchBlock from '../../components/GetInTouchBlock'

import AboutMenus from '../../constants/about_menus.json'

export const About = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About The Team at Mystic" />

      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Who We Are"
          subtitle="Our team is dedicated to making your project successful"
          selectedTab="Overview"
          tabs={AboutMenus}
      />

      <Container>

          <Content>
            <p>
              Our team is a dedicated group of technologists and business-minded folks who have a passion for solving business needs with tech-based solutions. Headed by our geek in charge Andrew Lombardi, 
              the group has created solutions for companies as large as Walmart and Motorola, to the yoga teacher just looking for a some help with her website. Over the last 6 years our team has also 
              spoken at venues around the world, teaching developers how to better use their tools, and imparting wisdom about best practices for using them.
            </p>
            <p>
              We're excited to work with our clients, as we feel it is a partnership that we grow together. We look forward to talking about your needs, and seeing if we can build something great together.      
            </p>

          </Content>          
          <hr />

          <GetInTouchBlock />

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
