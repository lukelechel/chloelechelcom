// import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
// import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import './Home.css'

AOS.init({
    duration: 1200,
    once: true
})

const baseResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

const Home = () => (<div className="pageContent">
    <div id="main">
        <picture>
            <source
                srcSet={`
                        ${baseResourceBucket}mainProfile-small.webp 400w,
                        ${baseResourceBucket}mainProfile-medium.webp 1000w,
                        ${baseResourceBucket}mainProfile-large.webp 2000w
                        `}
                type="image/webp"
                className="mainPhoto" />
            <img
                src={`${baseResourceBucket}mainProfile.jpg`}
                alt="Chloe Lechel profile"
                className="mainPhoto" />
        </picture>
        <div id="main-text">
            <h2>You're about to look</h2>
            <h1 data-aos="fade-right">so good<span className="desktopOnly">.</span></h1>
            <p>
                Chloe Lechel is a pro photographer based in Northeastern Indiana.
            </p>
        </div>
    </div>

    {/* <h1>View my portfolio</h1>
    <PortfolioGenres /> */}

</div>)

export default Home