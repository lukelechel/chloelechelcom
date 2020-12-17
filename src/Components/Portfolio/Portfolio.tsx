import React from 'react'
import './Portfolio.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import Gallery from '../Gallery/Gallery'

const Portfolio = () => (<div id="portfolio-container" className="pageContent">
    <PortfolioGenres />
    <div id="spacing"></div>
    <div className="desktopOnly"><Gallery /></div>
</div>)

export default Portfolio