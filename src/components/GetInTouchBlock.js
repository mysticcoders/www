import React from 'react'

import { Level, Content, Button, Title } from 'rbx'
import { useNavigate } from "@reach/router"
import { IoIosMail } from 'react-icons/io'

export const GetInTouchBlock = ({
    subtitle="We would love to chat with you about your new project",
    buttonText="Contact Us Today"
}) => {

    const navigate = useNavigate()

    return (        
        <div style={{ margin: '3rem'}}>
            <Level>
            <Level.Item>
                <IoIosMail size="3em" />
            </Level.Item>
            </Level>
            <Level>
            <Level.Item>
                <Title>GET IN TOUCH</Title>
            </Level.Item>
            </Level>
            <Level>
            <Level.Item>
                <Content>
                    <p>
                        {subtitle}
                    </p>
                </Content>
            </Level.Item>
            </Level>
            <Level>
            <Level.Item>

                <Button 
                    size="medium" 
                    onClick={() => { navigate(`/contact`) }}
                    style={{ backgroundColor: 'rgba(117, 208, 213, 1)'}}>{ buttonText }</Button>

            </Level.Item>
            </Level>
        </div>

    )
}

export default GetInTouchBlock