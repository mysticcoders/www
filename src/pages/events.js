import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Level, Container, Box, Column } from 'rbx'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiMap } from "react-icons/fi";

import { GetInTouchBlock } from '../components/GetInTouchBlock'

import events from '../../content/data/events.json'

export const Events = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Events" />

      <Level style={{marginTop: '5rem'}}>
        <Level.Item>
            <FiMap size="5em" />
        </Level.Item>
      </Level>
      <Level style={{ marginBottom: '0.5em'}}>
        <Level.Item>
            <Title>UPCOMING EVENTS</Title>
        </Level.Item>
      </Level>

        <Container>
            <Level>
                <Level.Item>
                    Due to COVID-19 all upcoming events have been postponed and our team is strictly doing any teaching from home.
                </Level.Item>
            </Level>
      </Container>

      <hr />

      <GetInTouchBlock 
              subtitle="Reach out for a training or to have one of us speak at your event"
              buttonText="Book Us Today!" 
          />

      <hr />

      <Level>
        <Level.Item>
            <Title>PAST EVENTS</Title>
        </Level.Item>
      </Level>
      <Container>
          <Level>
              <Level.Item>
                <em>
                    Mystic strives to give back, and get the word out about technology and issues that are important to us. We're available for speaking engagements and training.
                </em>
              </Level.Item>
          </Level>
          <hr />

          <Column.Group multiline>
          {events.map((event, key, idx) => (
                <Column size={3}>
                    <Box key={key}>
                      <Level>
                          <Level.Item>
                              <FaCalendarAlt size="2em" />
                          </Level.Item>
                      </Level>
                      <Level>
                          <Level.Item>
                              <Title size={5}>{event.title}</Title>
                          </Level.Item>
                      </Level>
                      <Level>
                          <Level.Item>
                              <em>{event.location}</em>
                          </Level.Item>
                      </Level>
                      <Level>
                          <Level.Item>
                              <em>{event.dates}</em>
                          </Level.Item>
                      </Level>
                      <p>{event.desc}</p>
                    </Box>
                </Column>
          ))}
          </Column.Group>

          <GetInTouchBlock 
              subtitle="Reach out for a training or to have one of us speak at your event"
              buttonText="Book Us Today!" 
          />

      </Container>
    </Layout>
  )
}

export default Events

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`