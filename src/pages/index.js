import React from "react"
import { useNavigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientLogos from '../components/ClientLogos'

import Image from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

import { Column, Content, Level, Title, Section, Button, Container } from 'rbx'

import { FaDatabase, FaQuoteRight } from "react-icons/fa"

import "rbx/index.css"

import "./styles.scss"

import { RandomTestimonial } from '../components/RandomTestimonial'
import { GetInTouchBlock } from '../components/GetInTouchBlock'

import ReactGA from 'react-ga'
import {
  GOOGLE_ANALYTICS_KEY,
} from '../constants'

ReactGA.initialize(GOOGLE_ANALYTICS_KEY)

export const IndexPage = ({data, location}) => {

  const siteTitle = "Andrew Lombardi"
  const navigate = useNavigate()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title="Home"
        keywords={[`blog`, `gatsby`, `javascript`, `react`]}
      />

      <div style={{ width: '100%', backgroundColor: 'rgba(251, 188, 9, 0.5)', minHeight: '400px'}}>

        <div style={{padding: '6rem'}}>
            
            <Container fluid>
                <Title style={{fontSize: '5rem'}}>We are a boutique development shop specializing in delivering your project</Title>
                
                      <Title size={5}>Any technology, we're ready.</Title>
                
                <Level>
                  <Level.Item>

                    <Button 
                        size="medium" 
                        onClick={() => { console.log('navigating to contact'); navigate(`/contact`) }}
                        style={{ backgroundColor: 'rgba(117, 208, 213, 1)'}}>Contact Us Today</Button>

                  </Level.Item>
                </Level>
            </Container>
        </div>
      </div>

      <Container>
      <Section>

      <Level>
        <Level.Item>
            <FaDatabase size="3em" />
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Title style={{marginBottom: '0'}}>Why Choose Us</Title>
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <em>Some of the things we rock at</em>
        </Level.Item>
      </Level>
      </Section>
      <Section>
      <Column.Group>
          <Column>
              <Title>BUSINESS VALUE</Title>
          </Column>
          <Column>
              Kicking butt and taking names with tech? Yea, we do that. We also strive to reach your business goals and bring a solution that fits with the needs you have today.          
          </Column>      
      </Column.Group>      

      <Column.Group>
          <Column>
              <Title>AGILE APPROACH</Title>
          </Column>
          <Column>
          Our team is an extension of yours, just with more geek. The solution is our focus, and working in an agile way gets us there.
          </Column>      
      </Column.Group>      

      <Column.Group>
          <Column>
              <Title>CUSTOM SOLUTIONS</Title>
          </Column>
          <Column>
          There isn't a language or technology we haven't heard of. We'll bring that wealth of knowledge onto your project, and integrate the right technology.
          </Column>      
      </Column.Group>      

      <Column.Group>
          <Column>
              <Title>LEGENDARY SUPPORT</Title>
          </Column>
          <Column>
          Our engagements don't end when the project is complete. Maintaining communication is paramount in our process.
          </Column>      
      </Column.Group>

      </Section>
      </Container>
      <div style={{ width: '100%', minHeight: '250px'}}>

      <BackgroundImage
        Tag="section"
        fluid={data.bg.childImageSharp.fluid}
        alt="bg"
      >

        <div style={{padding: '5rem'}}>


          <Level>
            <Level.Item>            
                <FaQuoteRight className='earthElement' size='3em' />
            </Level.Item>
          </Level>

          <Level>
            <Level.Item>            
                <Title style={{color: 'white'}}>WHAT OUR CLIENTS SAY</Title>
            </Level.Item>
          </Level>


          <RandomTestimonial />

        </div>
      </BackgroundImage>
      </div>

      <BackgroundImage
        Tag="section"        
        fluid={data.whoWeAreBg.childImageSharp.fluid}
        backgroundColor={`#040e18`}
        alt="who we are"
      >

        <Column.Group>
          <Column style={{padding: '3rem'}}>
              <Image
                fluid={data.whoWeAre.childImageSharp.fluid}
                alt="Budapest Lion"
              />

          </Column>
        
          <Column style={{padding: '3rem', paddingLeft: '0rem'}}>
              <Title className="whiteText">Who We Are</Title>
              <Content className="whiteText">
                <p>Our team is a dedicated group of technologists and business-minded folks who have a passion for solving 
                business needs with tech-based solutions. Headed by our geek in charge Andrew Lombardi, the group has created 
                solutions for companies as large as Walmart and Motorola, to the yoga teacher just looking for a some help with 
                her website. Over the last 10 years our team has also spoken at venues around the world, teaching developers 
                how to better use their tools, and imparting wisdom about best practices for using them. 
                </p>
                <p>
                We're excited to work with our clients, as we feel it is a partnership that we grow together. We look forward to 
                talking about your needs, and seeing if we can build something great together.
                </p>

                <Button 
                    size="medium" 
                    onClick={() => { console.log('navigating to contact'); navigate(`/about/team`) }}
                    style={{ backgroundColor: 'rgba(117, 208, 213, 1)'}}>Learn More About Team</Button>

              </Content>
          </Column>
        </Column.Group>
      </BackgroundImage>

      <Section>
      <Column.Group>
          <Column>
              <Title>WEB DEVELOPMENT</Title>
              Any language, any Unix-based platform and we've got you covered. Our main focus is catering to your business need, and getting it deployed.
          </Column>      
          <Column>
              <Title>APP DEVELOPMENT</Title>
              From Objective-C, Java, and Swift to hybrids like Flutter. We've got you covered.
          </Column>      
          <Column>
              <Title>TRAINING</Title>
              We've done trainings with web technologies, mobile, and enterprise tech for companies and conferences small and very very large.
          </Column>      

      </Column.Group>
      </Section>

      <div className="greyBg" >
        <ClientLogos />
      </div>


      <GetInTouchBlock />
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
    whoWeAre: file(relativePath: { eq: "about/photo-of-people-doing-handshakes-3183197.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`