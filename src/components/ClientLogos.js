import React from "react"
import { useNavigate } from "@reach/router"
import { useStaticQuery } from "gatsby"

import Image from 'gatsby-image'

import { Column } from 'rbx'

export const ClientLogos = () => {

    const data = useStaticQuery(clientLogosQuery)

  return (
      <>
      <Column.Group style={{ padding: '1rem'}}>
            <Column>
                <Image
                    fixed={data.client1.childImageSharp.fixed}
                    alt="Client 1"
                />
            </Column>
            <Column>
                <Image
                    fixed={data.client2.childImageSharp.fixed}
                    alt="Client 2"
                />
            </Column>
            <Column>
                <Image
                    fixed={data.client3.childImageSharp.fixed}
                    alt="Client 3"
                />
            </Column>
            <Column>
                <Image
                    fixed={data.client4.childImageSharp.fixed}
                    alt="Client 4"
                />
            </Column>
            <Column>
                <Image
                    fixed={data.client5.childImageSharp.fixed}
                    alt="Client 5"
                />
            </Column>
            <Column>
                <Image
                    fixed={data.client6.childImageSharp.fixed}
                    alt="Client 6"
                />
            </Column>
      </Column.Group>

      </>
  )
}


export default ClientLogos

export const clientLogosQuery = graphql`
  query {
    client1: file(relativePath: { eq: "clients/client-1.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    client2: file(relativePath: { eq: "clients/client-2.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    client3: file(relativePath: { eq: "clients/client-3.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    client4: file(relativePath: { eq: "clients/client-4.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    client5: file(relativePath: { eq: "clients/client-5.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
    client6: file(relativePath: { eq: "clients/client-6.png" }) {
        childImageSharp {
            fixed(width: 180, height: 85) {
                ...GatsbyImageSharpFixed
            }
        }
    }
  }
`