import React from 'react'
import './Portfolio.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import Gallery from '../Gallery/Gallery'

export default function Portfolio() { return (<div id="portfolio-container" className="pageContent">
    <PortfolioGenres />
    <div id="spacing"></div>
    <div className="desktopOnly"><Gallery /></div>
</div>)}