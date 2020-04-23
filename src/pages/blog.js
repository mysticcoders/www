import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

import { Title, Level, Container, Box} from 'rbx'
import { IoIosDocument } from 'react-icons/io' 

export const Blog = ({ data, location }) => {

  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      
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

      <div style={{ margin: "20px 0 40px" }}>
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Box key={node.fields.slug}>
              <Title>
                <Link
                  style={{ boxShadow: `none` }}
                  to={`blog${node.fields.slug}`}
                >
                  {title}
                </Link>
              </Title>
              {/* <small>{node.frontmatter.date}</small> */}
              <p
                dangerouslySetInnerHTML={{
                  __html: node.excerpt,
                }}
              />
            </Box>
          )
        })}
      </div>

      </Container>

    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query {
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
