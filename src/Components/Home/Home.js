import React from 'react'
import './Home.css'

import NavBar from '../NavBar/NavBar'

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

function Home() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <div id="main">
                    <img src={`${awsResourceLibraryPrefix}mainProfile.jpg`} id="mainPhoto" />
                    <div id="main-text">
                        <h2>You're about to look</h2>
                        <h1>so good<span className="desktopOnly">.</span></h1>
                        <p>
                            Chloe Lechel is a pro photographer based in Northeastern Indiana.
                        </p>
                    </div>
                </div>

                <p id="scrollForMore" className="desktopOnly">scroll for more</p>

                <img src={`${awsResourceLibraryPrefix}work-samples/golden.jpg`} className="workSample" />
                <img src={`${awsResourceLibraryPrefix}work-samples/spirit.jpg`} className="workSample" />
                <img src={`${awsResourceLibraryPrefix}work-samples/lilly.jpg`} className="workSample" />
            </div>
        </div>
    )
}

export default Home