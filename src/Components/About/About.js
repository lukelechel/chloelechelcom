import React from 'react'
import './About.css'

import NavBar from '../NavBar/NavBar'
import ActionButton from '../ActionButton/ActionButton'

const emoji = require("emoji-dictionary")

function About() {
    return (
        <div>
            <NavBar />
            <div id="about-container" className="pageContent">
                <img
                    src="https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/aboutProfile.jpg"
                    alt="In the foreground, the sun shines on Chloe's face. A body of water and trees are in the background."
                    id="aboutProfile" />
                <h1>About the Photographer</h1>
                <p>Hi, I'm Chloe. <span role="img" aria-label={emoji.getName("🥰")}>🥰</span></p>
                <p>I’m a photographer based in northeast Indiana. I'm thrilled to have turned my personal passion into my profession. From <a href="/portfolio" alt="Portfolio">my portfolio</a> you'll see how much I love delivering pictures that surprise and delight my wonderful clients. <span role="img" aria-label={emoji.getName("💕")}>💕</span></p>
                <p>Besides my work I love reading, exercise, plant-based cooking, and hygge-style living.</p>
                <p>Send me a message on <a href="https://www.instagram.com/chloelechelphotography/" alt="Chloe Lechel Photography on Instagram">Instagram</a> to see what beautiful work we can make together.</p>
                <div id="about-action"><ActionButton /></div>
            </div>
        </div>
    )
}

export default About