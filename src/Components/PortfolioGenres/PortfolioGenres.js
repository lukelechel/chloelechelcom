import React from 'react'
import './PortfolioGenres.css'

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

function PortfolioGenres() {
    return (
        <ul id="portfolioGenres">
            <li>
                <a href="/portfolio/portraits">
                    <img
                        src={`${awsResourceLibraryPrefix}spirit.jpg`}
                        alt=""
                        id="desktop-profile-nav" />
                    <p>Portraits</p>
                </a>
            </li>
            <li>
                <a href="/portfolio/couples">
                    <img
                        src={`${awsResourceLibraryPrefix}golden.jpg`}
                        alt=""
                        id="desktop-profile-nav" />
                    <p>Couples</p>
                </a>
            </li>
            <li>
                <a href="/portfolio/nature">
                    <img
                        src={`${awsResourceLibraryPrefix}lilly.jpg`}
                        alt=""
                        id="desktop-profile-nav" />
                    <p>Nature</p>
                </a>
            </li>
            <li>
                <a href="/portfolio/travel">
                    <img
                        src={`${awsResourceLibraryPrefix}bay.jpg`}
                        alt=""
                        id="desktop-profile-nav" />
                    <p>Travel</p>
                </a>
            </li>
        </ul>
    )
}

export default PortfolioGenres