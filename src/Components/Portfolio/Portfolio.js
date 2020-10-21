import React from 'react'
import './Portfolio.css'
import NavBar from '../NavBar/NavBar'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import Gallery from '../Gallery/Gallery'

function Portfolio() {
    return (
        <div>
            <NavBar />
            <div id="portfolio-container" className="pageContent">
                <PortfolioGenres />
                <div id="spacing"></div>
                <div className="desktopOnly"><Gallery /></div>
            </div>
        </div>
    )
}

export default Portfolio