import React from 'react'
import './About.css'

const emoji = require("emoji-dictionary")
const baseResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

export default function About() {
    return (<div>
        <div id="about-container" className="pageContent">
            <picture>
                <source
                    srcSet={`
                        ${baseResourceBucket}aboutProfile-small.webp 400w,
                        ${baseResourceBucket}aboutProfile-medium.webp 1000w,
                        ${baseResourceBucket}aboutProfile-large.webp 2000w
                        `}
                    type="image/webp" />
                <img
                    src={`${baseResourceBucket}aboutProfile.jpg`}
                    alt="In the foreground, the sun shines on Chloe's face. A body of water and trees are in the background."
                    id="aboutProfile" />
            </picture>
            <div id="about-text">
                <h1>About the photographer</h1>
                <p>Hi, I'm Chloe. <span role="img" aria-label={emoji.getName("🥰")}>🥰</span></p>
                <p>I’m a photographer based in Northeast Indiana. My <a href="/portfolio">portfolio</a> will show you how much I love delivering pictures that surprise and delight my wonderful clients. <span role="img" aria-label={emoji.getName("💕")}>💕</span></p>
                <p>Outside of work you'll find me reading, exercising, and cooking at home.</p>
                <p>If you're interested in working with me, send me a message on <a href="https://www.instagram.com/chloelechelphotography/">Instagram</a>.</p>
            </div>
        </div>
    </div>)
}