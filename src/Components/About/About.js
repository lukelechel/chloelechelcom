import React from 'react'
import './About.css'

import NavBar from '../NavBar/NavBar'

const emoji = require("emoji-dictionary")
const awsResourceLibBasePrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

function About() {
    return (
        <div>
            <NavBar />
            <div id="about-container" className="pageContent">
                <picture>
                    <source
                        srcSet={`
                            ${awsResourceLibBasePrefix}aboutProfile-small.webp 400w,
                            ${awsResourceLibBasePrefix}aboutProfile-medium.webp 1000w,
                            ${awsResourceLibBasePrefix}aboutProfile-large.webp 2000w
                            `}
                        type="image/webp" />
                    <img
                        src={`${awsResourceLibBasePrefix}aboutProfile.jpg`}
                        alt="In the foreground, the sun shines on Chloe's face. A body of water and trees are in the background."
                        id="aboutProfile" />
                </picture>
                <div id="about-text">
                    <h1>About the photographer</h1>
                    <p>Hi, I'm Chloe. <span role="img" aria-label={emoji.getName("🥰")}>🥰</span></p>
                    <p>I’m a photographer based in Northeast Indiana. My <a href="/portfolio" alt="Portfolio">portfolio</a> will show you how much I love delivering pictures that surprise and delight my wonderful clients. <span role="img" aria-label={emoji.getName("💕")}>💕</span></p>
                    <p>Outside of work you'll find me reading, exercising, and cooking at home.</p>
                    <p>If you're interested in working with me, send me a message on <a href="https://www.instagram.com/chloelechelphotography/" alt="Chloe Lechel Photography on Instagram">Instagram</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default About