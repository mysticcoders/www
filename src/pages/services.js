import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Level, Column, Container, Section } from 'rbx'
import { FiMap } from "react-icons/fi";

export const Services = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Services" />

      <Level style={{marginTop: '5rem'}}>
        <Level.Item>
            <FiMap size="5em" />
        </Level.Item>
      </Level>
      <Level style={{ marginBottom: '0.5em'}}>
        <Level.Item>
            <Title>OUR SERVICES</Title>
        </Level.Item>
      </Level>


      <Container>
          <Level>
              <Level.Item>
                <em>
                Adding value to your company is what we're all about, web &amp; mobile development is our tools to help you get there.
                </em>
              </Level.Item>
          </Level>
          <hr />

      <Section>
      <Column.Group>
          <Column>
              <Title>WEB DEVELOPMENT</Title>
          </Column>
          <Column>
              Any language, any Unix-based platform and we've got you covered. Our main focus is catering to your business need, and getting it deployed.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>APP DEVELOPMENT</Title>
          </Column>
          <Column>
              From Objective-C, Java, and Swift to hybrids like Titanium and PhoneGap. We've got you covered.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>TRAINING</Title>
          </Column>
          <Column>
              We've done trainings with web technologies, mobile, and enterprise tech for companies and conferences small and very very large.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>TECHNOLOGY CONSULTING</Title>
          </Column>
          <Column>
              Our team are experts in their field, so we're able to assess technology faster and provide quick solutions.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>PRODUCT EVANGELISM</Title>
          </Column>
          <Column>
              We evangelize the products we love and use, and because of our conference speaking have been able to do so for these 
              products. Reach out if you think our team can be a good fit for your product.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>BUSINESS AUTOMATION</Title>
          </Column>
          <Column>
              If you're being repetitive, you're wasting man hours that could be automated by a machine. Let us help you get there.
          </Column>      
      </Column.Group>

      <Column.Group>
          <Column>
              <Title>CLOUD DEVELOPMENT</Title>
          </Column>
          <Column>
              We're cloud native. Our team has run apps on bare metal, and on Dell servers, but we love spinning up a few instances on 
              AWS or Azure. Or a Kubernetes cluster on Google Cloud. You need cloud? we can help get you there.
          </Column>      
      </Column.Group>

      </Section>




















      </Container>
    </Layout>
  )
}

export default Services

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`



/*
WEB DEVELOPMENT

Any language, any Unix-based platform and we've got you covered. Our main focus is catering to your business need, and getting it deployed.

APP DEVELOPMENT

From Objective-C, Java, and Swift to hybrids like Titanium and PhoneGap. We've got you covered.

TRAINING

We've done trainings with web technologies, mobile, and enterprise tech for companies and conferences small and very very large.

TECHNOLOGY CONSULTING

Our team are experts in their field, so we're able to assess technology faster and provide quick solutions.

PRODUCT EVANGELISM

We've done it for several products by plugging the technology at conferences worldwide.

BUSINESS AUTOMATION

If you're being repetitive, you're wasting man hours that could be automated by a machine. Let us help you get there.

CLOUD MIGRATION

Cloud cloud cloud Cloud cloud cloud Cloud cloud cloud Cloud cloud cloud Cloud cloud cloud Cloud cloud cloud Cloud cloud cloud
*/