import React from 'react'

import { Column, Section } from 'rbx'

import testimonials from "../../content/data/testimonials.json"

export const RandomTestimonial = () => {

    const testimonialIndex = Math.floor((Math.random() * (testimonials.length - 1)) + 1)

    return (
        <Column.Group centered>
            <Column size={6}>
                <Section style={{ color: 'white', border: '1px solid white', padding: '2rem'}}>
                <em style={{ color: 'white' }}>
                    {testimonials[testimonialIndex].quote}
                </em>
                </Section>

                <p style={{ marginTop: '2rem', color: 'white'}}>
                    {testimonials[testimonialIndex].author}
                </p>
            </Column>
        </Column.Group>        
    )
}

export default RandomTestimonial