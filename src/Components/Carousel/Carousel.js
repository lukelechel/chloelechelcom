import React from 'react'
import './Carousel.css'

import galleryData from '../Gallery/GalleryData.json'
const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

class Carousel extends React.Component {
    constructor(props) {
        super()

        this.state = {
            carouselIndex: 0,
            carouselLength: galleryData.filter(x => x.category === props.category).length
        }

        this.backASlide = this.backASlide.bind(this)
        this.forwardASlide = this.forwardASlide.bind(this)
    }

    backASlide() {
        let carouselIndex = this.state.carouselIndex
        let carouselLength = this.state.carouselLength

        if (carouselIndex < 1) {
            carouselIndex = carouselLength - 1
        } else {
            carouselIndex--
        }

        this.setState({
            carouselIndex: carouselIndex
        })
    }

    forwardASlide() {
        let carouselIndex = this.state.carouselIndex
        let carouselLength = this.state.carouselLength

        if (carouselIndex === carouselLength - 1) {
            carouselIndex = 0
        } else {
            carouselIndex++
        }

        this.setState({
            carouselIndex: carouselIndex
        })
    }

    render() {
        return (
            <div className="carousel-container">
                <div id="carousel-desktop" className="desktopOnly">
                    {
                        galleryData.filter(x => x.category === this.props.category).map((x, index) => {
                            return (
                                <div className={`${index === this.state.carouselIndex ? 'visible' : 'invisible'}`} key={x.title}>
                                    <img
                                        src={`${awsResourceLibraryPrefix}${x.title}.jpg`}
                                        alt={x.alt}
                                        className="carouselImg-desktop" />
                                </div>
                            )
                        })
                    }
                    <div id="carouselNavigation">
                        <p onClick={this.backASlide}>last</p>
                        <p>/</p>
                        <p onClick={this.forwardASlide}>next</p>
                    </div>
                </div>
                <div id="carousel-mobile" className="mobileOnly">
                    {
                        galleryData.filter(x => x.category === this.props.category).map(x => {
                            return (
                                <img
                                        src={`${awsResourceLibraryPrefix}${x.title}.jpg`}
                                        alt={x.alt}
                                        className="carouselImg-mobile"
                                        key={x.title} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Carousel
