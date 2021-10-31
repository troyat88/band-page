import React from 'react'
import { SocialIcon } from 'react-social-icons'

export const Social = () => {
    return (
<section id="social" className="section-2">
        <div className="container">
            <h1 className="bg-light rounded mt-15">
            Follow the Band. Become a Groupie. 
            </h1>
        <div className="social-icons-container">
            <SocialIcon className="social-icon" target="_blank" url="https://twitter.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://instagram.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://facebook.com" />
            <SocialIcon className="social-icon" target="_blank" url="https://reddit.com" />
        </div>
        </div>
    </section>
    )
}

