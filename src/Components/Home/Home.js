import React from 'react'
import './Home.css'

import AOS from 'aos'
import 'aos/dist/aos.css';
import NavBar from '../NavBar/NavBar'

const awsResourceLibBasePrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"
const awsResourceLibWorkPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

function Home() {
    AOS.init({
        duration: 1200
    })
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <div id="main">
                    <img src={`${awsResourceLibBasePrefix}mainProfile.jpg`} id="mainPhoto" alt="Chloe Lechel profile" />
                    <div id="main-text">
                        <h2>You're about to look</h2>
                        <h1 data-aos="fade-up" data-aos-once="true">so good<span className="desktopOnly">.</span></h1>
                        <p>
                            Chloe Lechel is a pro photographer based in Northeastern Indiana.
                        </p>
                    </div>
                </div>

                <p id="scrollForMore" className="desktopOnly">scroll for more</p>

                <img src={`${awsResourceLibWorkPrefix}25D111F2-7266-4792-B73E-365BB171438B.jpg`} className="workSample" alt="Couple kissing in the sun" />
                <img src={`${awsResourceLibWorkPrefix}CAB8171E-3485-4AAB-9875-AD86EF8957CF.jpg`} className="workSample" alt="Girl with hands on the back of her head as she walks through a field" />
                <img src={`${awsResourceLibWorkPrefix}5740DA5D-ADEA-44A5-BFD3-459B207CB066.jpg`} className="workSample" alt="Lillies on water" />
            </div>
        </div>
    )
}

export default Home