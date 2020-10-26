import React from 'react'
import './PortfolioGenre.css'
import photoData from '../../PhotoData.json'

import AOS from 'aos'
import 'aos/dist/aos.css';

import NavBar from '../NavBar/NavBar'

const awsResourceLibWorkPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

class PortfolioGenre extends React.Component {
    constructor(props) {
        super()

        this.getGenre = this.getGenre.bind(this)
        this.getGenreCategory = this.getGenreCategory.bind(this)
        this.getGenrePhotos = this.getGenrePhotos.bind(this)
    }

    componentDidMount() {
        AOS.init({
            duration: 1200
        })
    }

    getGenre() {
        const { match: { params } } = this.props
        const currentGenre = params.id
        return currentGenre
    }
    
    getGenreCategory() {
        let genre = this.getGenre()
        if (genre === 'portraits') {
            return 'portrait'
        } else if (genre === 'couples') {
            return 'couple'
        } else if (genre === 'weddings') {
            return 'wedding'
        } else {
            return genre
        }
    }

    getGenrePhotos() {
        const genrePhotos = photoData.filter(img => img.category === this.getGenreCategory())

        // Rnadomize photoData array
        let currentIndex = genrePhotos.length, tempValue, randomIndex

        while (0 !== currentIndex) {

            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
        
            // And swap it with the current element
            tempValue = genrePhotos[currentIndex];
            genrePhotos[currentIndex] = genrePhotos[randomIndex];
            genrePhotos[randomIndex] = tempValue;
        }

        return genrePhotos.map((x, i) => {
            return (
                <picture key={i}>
                    <source
                        srcSet={`
                            ${awsResourceLibWorkPrefix}${x.fileName}-small.webp 400w,
                            ${awsResourceLibWorkPrefix}${x.fileName}-medium.webp 1000w,
                            ${awsResourceLibWorkPrefix}${x.fileName}-large.webp 2000w
                            `}
                        type="image/webp"
                    />
                    <img
                        src={`${awsResourceLibWorkPrefix}${x.fileName}.jpg`}
                        alt={x.alt}
                        type="img/jpeg"
                        className="genrePhoto"
                            data-aos="fade-up"
                            data-aos-once="true" />
                </picture>
            )
        })
    }

    render() {
        return (
            <div id="genre-container">
                <NavBar />
                <div className="pageContent">
                    <h1 id="categoryTitle">{this.getGenre()}</h1>
                    {this.getGenrePhotos()}
                </div>
            </div>
        )
    }
}

export default PortfolioGenre