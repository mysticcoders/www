import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import CircleImage from '../components/CircleImage'

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Level, Container, Column } from 'rbx'
import { IoIosPeople } from 'react-icons/io'

export const About = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  const queryData = useStaticQuery(pageQuery)

  console.dir(queryData)

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About The Team at Mystic" />

      <Level>
        <Level.Item>
            <IoIosPeople size="5rem" />
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Title>Who We Are</Title>
        </Level.Item>
      </Level>
      <Container>
          <p>
              Our team is a dedicated group of technologists and business-minded folks who have a passion for solving business needs with tech-based solutions. Headed by our geek in charge Andrew Lombardi, 
              the group has created solutions for companies as large as Walmart and Motorola, to the yoga teacher just looking for a some help with her website. Over the last 6 years our team has also 
              spoken at venues around the world, teaching developers how to better use their tools, and imparting wisdom about best practices for using them.
          </p>
          <p>
            We're excited to work with our clients, as we feel it is a partnership that we grow together. We look forward to talking about your needs, and seeing if we can build something great together.      
          </p>
          <hr />
          <Column.Group>
              <Column>
                <CircleImage
                    fluid={queryData.AndrewLombardi.childImageSharp.fluid}
                    alt="Andrew Lombardi Profile"
                  />
              </Column>
              <Column>
                  <Title>
                      Andrew Lombardi
                  </Title>
                  <p>
                      <em>
                          Founder &amp; Architect
                      </em>
                  </p>
                  <p>
                      Andrew Lombardi is a veteran entrepreneur and software developer. His parents taught him to code while barely able to read on an Apple // he still wishes he had. 
                      He invented the Internet and Nutella (suck it Al Gore) while drinking bulletproof coffee and staring off into space. He’s been running the consulting firm Mystic 
                      Coders for 20 years, authored a kick-ass book for O'Reilly on WebSocket, coding, speaking internationally and offering technical guidance to companies as large as 
                      Walmart and companies with problems as interesting as helicopter simulation. He firmly believes that the best thing he’s done so far, is being a great dad.                 
                  </p>
              </Column>
          </Column.Group>
          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fluid={queryData.JakeMasters.childImageSharp.fluid}
                      alt="Jake Masters Profile"
                  />
              </Column>
              <Column>
                  <Title>
                      Jake Masters
                  </Title>
                  <p>
                      <em>
                          Technical Advisor
                      </em>
                  </p>
                  <p>
                      Multi-disciplined technology leader with 18+ years of experience in managing tech teams, products and business development.
                  </p>
                  <p>
                      I’ve spent the last 15 years with a specific interest in energy efficiency and electrical power quality issues, and the last 8 years focused on IoT platform development.
                  </p>
                  <p>
                      I’ve been in the startup world for the last 10 years, holding various roles as technical founder, CTO, CEO, board member, and advisor.
                  </p>
                  <p>
                      I’m always intrigued by the intersection of hardware, software and user, and find the challenge of developing products with seamless integration between the three rewarding- especially when applied to global energy issues.
                  </p>
              </Column>
          </Column.Group>
          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fluid={queryData.JohnCatalina.childImageSharp.fluid}
                      alt="John Catalina Profile"
                  />
              </Column>
              <Column>
                  <Title>
                      John Catalina
                  </Title>
                  <p>
                      <em>
                          Business Advisor
                      </em>
                  </p>
                  <p>
                      John Catalina has worked in such a wide ranging list of industries and experiences that to write them would equate to a big fish story hardly to be believed. As a trusted advisor to 
                      Mystic for nearly 10 years, he has helped shape the values that we strive for with our customers, and has grounded a sense of purpose into the mission and values of the company. 
                  </p>
              </Column>
          </Column.Group>

          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fluid={queryData.RyanSadler.childImageSharp.fluid}
                      alt="Ryan Sadler Profile"
                  />
              </Column>
              <Column>
                  <Title>
                      Ryan Sadler
                  </Title>
                  <p>
                      <em>
                          Full-Stack Engineer
                      </em>
                  </p>
                  <p>
                      Ryan started programming when he was 8 years old on a Commodore Vic20 using BASIC. Fascinated with Robotics and Artificial Intelligence he pursued an Honors degree in Computer 
                      and Electrical Engineering at Simon Fraser University. As a student, Ryan was part of a student-lead team participating in the International Aerial Robotics Competition several 
                      years in a row. Since graduation, Ryan has been a lead developer in several Internet Startups. Ryan has experience developing mission-critical software in the Process Control and 
                      Finance Industries. At night, Ryan dreams about building a better "SkyNet".
                  </p>
              </Column>
          </Column.Group>
      </Container>
    </Layout>
  )
}


export default About

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 200, maxHeight: 200) {
        ...GatsbyImageSharpFluid
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
    RyanSadler: file(relativePath: { eq: "about/ryan_sadler.png" }) {
      ...squareImage
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
