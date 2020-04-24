import React from "react"
import { useNavigate } from "@reach/router"

import BackgroundImage from 'gatsby-background-image'

import { Title, Column, Tab } from 'rbx'

export const HeaderWithTabs = ({ 
    heroImage,
    title, 
    subtitle,
    selectedTab,
    tabs
}) => {

  const navigate = useNavigate()

  return (
      <>
      <BackgroundImage
        Tag="section"
        style={{ minHeight: '250px'}}
        fluid={heroImage}
        alt="About Hero">

            <Column.Group style={{ padding: '3rem'}} align="center">
                <Column>
                    <Title className="logo-color">{title}</Title>
                    <Title subtitle size={5}>{subtitle}</Title>
                </Column>
            </Column.Group>

      </BackgroundImage>
      <Tab.Group size={3} fullwidth kind="boxed">
          { tabs.map(tab => (
                <Tab 
                    key={tab.name} 
                    active={tab.name === selectedTab} 
                    onClick={() => { navigate(tab.location)}}>{tab.name}</Tab>
          ))}
      </Tab.Group>
      </>
  )
}


export default HeaderWithTabs
