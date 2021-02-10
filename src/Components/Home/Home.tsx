import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import './Home.css'

AOS.init({
    duration: 1200,
    once: true
})

const baseResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

const Home = () => (<div className="pageContent">
    <div id="main">
        <img
            src={`${baseResourceBucket}mainProfile.jpg`}
            alt="Chloe Lechel profile"
            className="mainPhoto" />
        <div id="main-text">
            <h2>You're about to look</h2>
            <h1 data-aos="fade-right">so good<span className="desktopOnly">.</span></h1>
            <p>
                Chloe Lechel is a pro photographer based in northeastern Indiana.
            </p>
        </div>
    </div>

    <div id="see-more-port-section">
        <h1>View my portfolio</h1>
        <PortfolioGenres />
    </div>

</div>)

export default Home