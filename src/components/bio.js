/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { Level } from 'rbx'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Bio() {
  
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        
        return (
          <>
          <Level>
            <Level.Item>
                <Image
                  fixed={data.avatar.childImageSharp.fixed}
                  alt={author}
                  style={{
                    marginBottom: 0,
                    minWidth: 75,
                    borderRadius: `100%`,
                  }}
                  imgStyle={{
                    borderRadius: `50%`,
                  }}
                />
            </Level.Item>
          </Level>
          <Level>
            <Level.Item>
                  Written by &nbsp; <strong>{author}</strong> &nbsp; who lives and works in Orange County, CA.
            </Level.Item>
          </Level>
          <Level>
            <Level.Item>
                <a style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} href={`https://facebook.com/${social.facebook}`}>
                    <FaFacebook />
                </a>
                <a style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} href={`https://twitter.com/${social.twitter}`}>
                    <FaTwitter />
                </a>
                <a style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} href={`https://instagram.com/${social.instagram}`}>
                    <FaInstagram />
                </a>
                <a style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} href={`https://linkedin.com/${social.linkedin}`}>
                    <FaLinkedin />
                </a>
            </Level.Item>
          </Level>
          </>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 75, height: 75) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          facebook
          linkedin
          instagram
        }
      }
    }
  }
`

export default Bio
