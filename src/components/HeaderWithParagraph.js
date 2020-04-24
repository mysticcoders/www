import React from 'react'

import { Title } from 'rbx'

export const HeaderWithParagraph = ({title, subtitle, text}) => (
    <>
        <Title size={4} style={{marginBottom: '0'}}>{title}</Title>
        <em>{subtitle}</em>
        <p style={{marginTop: '1rem'}}>
            {text}
        </p>
    </>
)

export default HeaderWithParagraph