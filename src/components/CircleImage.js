import React from 'react'

import Image from 'gatsby-image'

export const CircleImage = ({fixed, alt}) => {

    return (
        <Image
            fixed={fixed}
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