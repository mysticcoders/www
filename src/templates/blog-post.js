import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { Title, Level, Container, Content, Section} from 'rbx'
import { IoIosDocument } from 'react-icons/io' 
import { FaHome } from 'react-icons/fa' 

export const BlogPostTemplate = ({pageContext, data, location}) => {
  
  const READING_SPEED = 200

  const post = data.mdx
  const siteTitle = data.site.siteMetadata.title
  const { previous, next } = pageContext

  const timeToReadInDecimal = post.wordCount.words / READING_SPEED
  const timeToRead = {
    minutes: Math.floor(timeToReadInDecimal),
    seconds: Math.floor((timeToReadInDecimal - Math.floor(timeToReadInDecimal)) * 60)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.excerpt}
      />

      <Level>
        <Level.Item>
            <IoIosDocument size="5rem" />
        </Level.Item>
      </Level>
      <Level>
        <Level.Item>
            <Title>Mystic Blog</Title>
        </Level.Item>
      </Level>

      <Level>
        <Level.Item>
            <em>Learn and Teach</em>
        </Level.Item>
      </Level>

      <hr />

      <Container>

          <Section>
              <Title>{post.frontmatter.title}</Title>
              <p style={{
                display: 'block',
                fontStyle: 'italic'
              }}>
                Reading time: {timeToRead.minutes} minute{timeToRead.minutes > 1 ? 's' : ''} {timeToRead.seconds > 0 ? timeToRead.seconds + ' seconds' : ''}
              </p>

              <Bio />

          </Section>
          
          <hr />

          <Section>
            <Content>
                <MDXRenderer>{post.body}</MDXRenderer>
            </Content>
          </Section>
          <hr />

      
      <Level>
        <Level.Item align="left">
          {previous && (
            <Link to={`blog${previous.fields.slug}`} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </Level.Item>
        <Level.Item align="right">
          {next && (
            <Link to={`blog${next.fields.slug}`} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}

        </Level.Item>
      </Level>

      <Level>
        <Level.Item>
            <Link to="/">
                <FaHome size="2rem" />
            </Link>
        </Level.Item>
      </Level>

      </Container>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      timeToRead
      wordCount {
        words
      }
    }
  }
`
