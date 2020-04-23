import React from 'react'

import Image from 'gatsby-image'

export const CircleImage = ({fluid, alt}) => {

    return (
        <Image
            fluid={fluid}
            style={{
                marginBottom: 0,
                minWidth: 75,
                borderRadius: `100%`,
            }}
            imgStyle={{
                borderRadius: `50%`,
            }}  
            alt={alt}
        />

    )
}

export default CircleImage