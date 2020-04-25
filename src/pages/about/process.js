import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Image from 'gatsby-image'
import HeaderWithTabs from '../../components/HeaderWithTabs'
import HeaderWithParagraph from '../../components/HeaderWithParagraph'
import GetInTouchBlock from '../../components/GetInTouchBlock'
import AboutMenus from '../../constants/about_menus.json'

import { Container, Column } from 'rbx'

export const Process = ({ data, location }) => {
    
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About Our Process at Mystic" />

      <HeaderWithTabs 
          heroImage={data.header.childImageSharp.fluid}
          title="Our Process"
          subtitle="Our team is dedicated to making your project successful"
          selectedTab="Process"
          tabs={AboutMenus}
      />

      <Container>
          <p>
            The Mystic team follows a five-step process for our engagements with clients. This ensures that we’ve accurately completed every stage necessary to bring about a successful project. And we’re mystics, so our process takes on the basic elements of the magical universe.
          </p>

          <Column.Group style={{marginTop: '2rem'}}>
            <Column>            
                <Image
                    fluid={data.air.childImageSharp.fluid}
                    alt={"Air Image"}
                />
            </Column>                
            <Column>
                <HeaderWithParagraph 
                    title="AIR"
                    subtitle="Thought and Discovery"
                    text={`Our team of folks at this stage of the game are pulling together necessary 
                    documents, designs, diagrams, and assets needed to craft a story about your project, 
                    and the functionality you expect.`}
                />            
            </Column>                
          
          </Column.Group>
          
          <hr />

          <Column.Group>
            <Column>
                <Image
                    fluid={data.fire.childImageSharp.fluid}
                    alt={"Fire Image"}
                />            
            </Column>                
            <Column>
                <HeaderWithParagraph 
                    title="FIRE"
                    subtitle="Creativity / Design"
                    text={`The bulk of the work goes into this step. Here we work with the designs, the 
                    accepted functionality, and create the project. Continual communication between client 
                    and designer throughout this phase.`}
                />
            </Column>                
          
          </Column.Group>
          
          <hr />
        
          <Column.Group>
            <Column>
                <Image
                    fluid={data.water.childImageSharp.fluid}
                    alt={"Water Image"}
                />            
            </Column>                
            <Column>
                <HeaderWithParagraph 
                    title="WATER"
                    subtitle="Communication and Organization"
                    text={`Quality in a project can be assured by communicating effectively together as 
                    a cohesive team. We help you manage your project for success and ensure that the needs 
                    are met by both parties. We’ll set up project reviews, and ensure that you’re aware of 
                    the progress being made. In addition if there are structural issues that need to be talked 
                    about, we’ll help organize so we provide the simplest way for the business needs of your 
                    project to be fulfilled for you and your customers.`}
                />
            </Column>                
          
          </Column.Group>
          
          <hr />        

          <Column.Group>
            <Column>
                <Image
                    fluid={data.earth.childImageSharp.fluid}
                    alt={"Earth Image"}
                />            
            </Column>                
            <Column>
                <HeaderWithParagraph 
                    title="EARTH"
                    subtitle="Deployment and Real World"
                    text={`The manifestation into the physical realm happens in this stage. The new 
                    project is deployed, and we all get to celebrate a successful unveiling. Our team 
                    doesn’t stop thinking after we’ve successfully launched your new project. It’s at 
                    this critical phase that we can start talking future strategy, maintenance, and next 
                    steps for getting even more value.`}
                />                        
            </Column>                
          
          </Column.Group>
          
          <hr />

          <Column.Group style={{marginBottom: '3rem'}}>
            <Column>
                <Image
                    fluid={data.spirit.childImageSharp.fluid}
                    alt={"Spirit Image"}
                />                        
            </Column>                
            <Column>
                <HeaderWithParagraph 
                    title="THE FIFTH ELEMENT"
                    subtitle="You and Us"
                    text={`Here at Mystic, we are grateful for the amazing people we get to work with. 
                    The opportunity to create with people we like, and projects we believe in, is why 
                    we do this. To our success.`}
                />
            </Column>                
          
          </Column.Group>

          <GetInTouchBlock />

      </Container>
    </Layout>
  )
}

export default Process

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
    header: file(relativePath: { eq: "about/group-of-people-watching-on-laptop-1595385.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 640, maxHeight: 500, fit: CONTAIN, duotone: { highlight: "#ffffff", shadow: "#ffffff", opacity: 50}) {
          ...GatsbyImageSharpFluid
        }
      }
    }
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
