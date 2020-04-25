import React from "react"
import { useNavigate } from "@reach/router"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ClientLogos from '../components/ClientLogos'

import Image from 'gatsby-image'

import BackgroundImage from 'gatsby-background-image'

import { Column, Content, Level, Title, Section, Button } from 'rbx'

import { FaDatabase, FaQuoteRight } from "react-icons/fa"
import { IoIosMail } from 'react-icons/io'

import "rbx/index.css"

import "./styles.scss"

import { RandomTestimonial } from '../components/RandomTestimonial'

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
            <Level>
              <Level.Item>
                  <Title>We are a boutique development shop specializing in delivering your project</Title>
              </Level.Item>
            </Level>
            
            <Level>
              <Level.Item>
                  <Title size={5}>Any technology, we're ready.</Title>
              </Level.Item>
            </Level>
            
            <Level>
              <Level.Item>

                <Button 
                    size="medium" 
                    onClick={() => { console.log('navigating to contact'); navigate(`/contact`) }}
                    style={{ backgroundColor: 'rgba(117, 208, 213, 1)'}}>Contact Us Today</Button>

              </Level.Item>
            </Level>
        </div>
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


      <div className="greyBg" >
        <ClientLogos />
      </div>

      <div style={{ margin: '3rem'}}>
      <Level>
        <Level.Item>
            <IoIosMail size="3rem" />
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Title>GET IN TOUCH</Title>
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Content>
              <p>
                We would love to chat with you about your new project
              </p>
            </Content>
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>

          <Button 
              size="medium" 
              onClick={() => { console.log('navigating to contact'); navigate(`/contact`) }}
              style={{ backgroundColor: 'rgba(117, 208, 213, 1)'}}>Contact Us Today</Button>

        </Level.Item>
      </Level>
      </div>

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