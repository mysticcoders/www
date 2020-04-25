import React from "react"
import { graphql } from "gatsby"

import CircleImage from '../../components/CircleImage'

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeaderWithTabs from '../../components/HeaderWithTabs'

import { Title, Container, Content, Column } from 'rbx'

export const Team = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About The Team at Mystic" />


      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Who We Are"
          subtitle="Our team is dedicated to making your project successful"
          selectedTab="Team"
          tabs={[
            { name: 'Overview', location: '/about'},
            { name: 'Team', location: '/about/team'},
            { name: 'Philosophy', location: '/about/tos'},
            { name: 'Careers', location: '/about/careers'},
            { name: 'Process', location: '/about/process'},
          ]}
      />

      <Container>
          <Column.Group>
              <Column>
                <CircleImage
                    fixed={data.AndrewLombardi.childImageSharp.fixed}
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
                      fixed={data.JakeMasters.childImageSharp.fixed}
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
                      Multi-disciplined technology leader with 18+ years of experience in managing 
                      tech teams, products and business development. I’ve spent the last 15 years 
                      with a specific interest in energy efficiency and electrical power quality 
                      issues, and the last 8 years focused on IoT platform development. I’ve been 
                      in the startup world for the last 10 years, holding various roles as technical 
                      founder, CTO, CEO, board member, and advisor. I’m always intrigued by the 
                      intersection of hardware, software and user, and find the challenge of developing 
                      products with seamless integration between the three rewarding- especially when 
                      applied to global energy issues.
                  </p>
              </Column>
          </Column.Group>
          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fixed={data.JohnCatalina.childImageSharp.fixed}
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
                      John Catalina has worked in such a wide ranging list of industries and 
                      experiences that to write them would equate to a big fish story hardly 
                      to be believed. As a trusted advisor to Mystic for over 15 years, he has 
                      helped shape the values that we strive for with our customers, and has 
                      grounded a sense of purpose into the mission and values of the company. 
                  </p>
              </Column>
          </Column.Group>

          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fixed={data.LucasMarohn.childImageSharp.fixed}
                      alt="Lucas Marohn Profile"
                  />
              </Column>
              <Column>
                  <Title>
                    Lucas Marohn
                  </Title>
                  <p>
                      <em>
                        Full-Stack Designer
                      </em>
                  </p>
                  <p>
                    Lucas is a talented designer and out-of-the-box thinker who has worked with Mystic on 
                    several of our key projects. He is one of the rare people who can nicely straddle the 
                    line between development, design and an ability to discern what a client needs. A strong 
                    member of the team he has been instrumental in infusing a bit more of the pretty into the 
                    elements that Mystic delivers to our clients, and to the world.
                  </p>
              </Column>
          </Column.Group>          <hr />
          <Column.Group>
              <Column>
                  <CircleImage
                      fixed={data.RyanSadler.childImageSharp.fixed}
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
                      Ryan started programming when he was 8 years old on a Commodore Vic20 using 
                      BASIC. Fascinated with Robotics and Artificial Intelligence he pursued an 
                      Honors degree in Computer and Electrical Engineering at Simon Fraser University. 
                      As a student, Ryan was part of a student-lead team participating in the International 
                      Aerial Robotics Competition several years in a row. Since graduation, Ryan has been 
                      a lead developer in several Internet Startups. Ryan has experience developing 
                      mission-critical software in the Process Control and Finance Industries. At night, Ryan 
                      dreams about building a better "SkyNet".
                  </p>
              </Column>
          </Column.Group>
      </Container>
    </Layout>
  )
}


export default Team

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
    LucasMarohn: file(relativePath: { eq: "about/lucas_marohn.jpg" }) {
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
