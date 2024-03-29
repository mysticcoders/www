import React, { useEffect } from "react"
import { StaticQuery, graphql } from "gatsby"
import { useNavigate } from "@reach/router"
import ReactGA from 'react-ga'

import { Navbar, Level, Footer } from "rbx"

import MysticLogo from './logo.png'
import MysticLogoGrey from './logo-grey.png'

import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export const Layout = ({children}) => {
  
    // const { location, title, children } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // const blogPath = `${__PATH_PREFIX__}/blog/`
    
    const navigate = useNavigate()

    useEffect(() => {
      ReactGA.pageview(window.location.pathname + window.location.search)  
    }, [])

    let header = (
      <StaticQuery
        query={dataQuery}
        render={data => {
          const { social } = data.site.siteMetadata

          return (
            <Navbar>
              <Navbar.Brand>
                  <Navbar.Item onClick={() => navigate('/')}>
                      <img src={MysticLogo} width="112" height="28" alt="Mystic Coders Logo" />
                  </Navbar.Item>
                  <Navbar.Burger />
              </Navbar.Brand>
              <Navbar.Menu>
            <Navbar.Segment align="end">
              <Navbar.Item onClick={() => navigate('/')}>
                Home
              </Navbar.Item>
              <Navbar.Item onClick={() => navigate('/services')}>
                Services
              </Navbar.Item>
              <Navbar.Item onClick={() => navigate('/events')}>
                Events &amp; Trainings
              </Navbar.Item>
              <Navbar.Item onClick={() => navigate('/about')}>
                About
              </Navbar.Item>
              <Navbar.Item onClick={() => navigate('/blog')}>
                Blog
              </Navbar.Item>
              <Navbar.Item as="div">                
                <a rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://facebook.com/${social.facebook}`}>
                    <FaFacebook />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://github.com/mysticcoders`}>
                    <FaGithub />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://twitter.com/${social.twitter}`}>
                    <FaTwitter />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://linkedin.com/${social.linkedin}`}>
                    <FaLinkedin />
                </a>
              </Navbar.Item>
            </Navbar.Segment>
          </Navbar.Menu>
        </Navbar>     
          )
        }}
      >
         
      </StaticQuery>
    )

    return (
      <>
        {header}
        <main>
          {children}
        </main>

        <Footer>
          <Level>
            <Level.Item>
                <a rel="noopener noreferrer" style={{ color: 'rgba(53, 79, 140, 1)', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://facebook.com/`}>
                    <FaFacebook size="2em" />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'black', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://github.com/`}>
                    <FaGithub size="2em" />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'rgba(116, 181, 236, 1)', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://twitter.com/`}>
                    <FaTwitter size="2em" />
                </a>
                <a rel="noopener noreferrer" style={{ color: 'rgba(0, 115, 177, 1)', textDecoration: 'none', padding: '0.5rem'}} target="_blank" href={`https://linkedin.com/`}>
                    <FaLinkedin size="2em" />
                </a>

            </Level.Item>
          </Level>

          <Level>
            <Level.Item>
                <img src={MysticLogoGrey} width="60" height="60" alt="Mystic Coders Logo" />
            </Level.Item>
          </Level>
          <Level>
            <Level.Item>
                <p>
                  Copyright © 1999 &mdash; {new Date().getFullYear()}
                  {` `}
                  <a href="https://mysticcoders.com">Mystic Coders, LLC</a>
                  {` `}
                </p>
            </Level.Item>
          </Level>
        </Footer>        
      </>
    )
}

const dataQuery = graphql`
  query LogoQuery {
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

export default Layout
