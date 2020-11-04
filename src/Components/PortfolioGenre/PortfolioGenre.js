import React from 'react'
import './PortfolioGenre.css'
import photoData from '../../PhotoData.json'

import AOS from 'aos'
import 'aos/dist/aos.css';

import NavBar from '../NavBar/NavBar'
import MainPortGenreList from '../MainPortGenreList/MainPortGenreList'
import Modal from '../Modal/Modal'

class PortfolioGenre extends React.Component {
    constructor(props) {
        super()

        this.imageSelected = this.imageSelected.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.modalLastImg = this.modalLastImg.bind(this)
        this.modalNextImg = this.modalNextImg.bind(this)

        this.state = {
            genrePhotoArray: [],
            selectedImage: '',
            modalVisibility: false,
            loadingVisibility: false
        }
    }

    componentDidMount() {
        this.getGenrePhotos()
    }

    getGenre() {
        // Get title
        const { match: { params } } = this.props
        const currentGenre = params.id

        // Refine title
        if (currentGenre === 'portraits') {
            return 'portrait'
        } else if (currentGenre === 'couples') {
            return 'couple'
        } else if (currentGenre === 'weddings') {
            return 'wedding'
        } else {
            return currentGenre
        }
    }

    getGenrePhotos() {
        // Save the right category of images
        const genrePhotos = photoData.filter(img => img.category === this.getGenre())

        // Rnadomize photoData array
        let thisIndex = genrePhotos.length, tempValue, randomIndex

        while (0 !== thisIndex) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * thisIndex);
            thisIndex -= 1;
            // And swap it with the current element
            tempValue = genrePhotos[thisIndex];
            genrePhotos[thisIndex] = genrePhotos[randomIndex];
            genrePhotos[randomIndex] = tempValue;
        }

        const genrePhotoArray = []

        genrePhotos.map(x => {
            return (
                genrePhotoArray.push(x)
            )
        })
        
        return this.setState({
            genrePhotoArray: genrePhotoArray
        })
    }

    imageSelected(photoInfo) {
        document.body.style.position = 'fixed'

        return this.setState({
            selectedImage: photoInfo,
            modalVisibility: true
        })
    }

    closeModal() {
        document.body.style.position = ''

        return this.setState({
            selectedImage: '',
            modalVisibility: false
        })
    }

    modalLastImg() {
        // initially selected img object, will update
        let carouselIndex = this.state.selectedImage
        // length of carousel
        let carouselLength = this.state.genrePhotoArray.length
        // get index position of selected image object
        let indexOfSelectedImg = this.state.genrePhotoArray.findIndex(x => x.fileName === carouselIndex.fileName)

        if (indexOfSelectedImg < 1) {
            carouselIndex = carouselLength - 1
        } else {
            carouselIndex = indexOfSelectedImg - 1
        }

        // find img object associated with the new carousel index
        let newCarouselImg = this.state.genrePhotoArray[carouselIndex]

        return this.setState({
            selectedImage: newCarouselImg
        })
    }
    modalNextImg() {
        // initially selected img object, will update
        let carouselIndex = this.state.selectedImage
        // length of carousel
        let carouselLength = this.state.genrePhotoArray.length
        // get index position of selected image object
        let indexOfSelectedImg = this.state.genrePhotoArray.findIndex(x => x.fileName === carouselIndex.fileName)

        if (indexOfSelectedImg === carouselLength - 1) {
            carouselIndex = 0
        } else {
            carouselIndex = indexOfSelectedImg + 1
        }

        // find img object associated with the new carousel index
        let newCarouselImg = this.state.genrePhotoArray[carouselIndex]

        return this.setState({
            selectedImage: newCarouselImg
        })
    }

    render() {

        AOS.init({
            duration: 1200
        })

        return (
            <div id="genre-container">
                <NavBar />
                <div className="pageContent">
                    <h1 id="categoryTitle">{this.getGenre()}</h1>
                    <MainPortGenreList genrePhotoArray={this.state.genrePhotoArray} imageSelected={this.imageSelected} />
                    {
                        this.state.modalVisibility ?
                            <Modal
                                selectedImage={this.state.selectedImage}
                                modalVisibility={this.state.modalVisibility}
                                loadingVisibility={this.state.loadingVisibility}
                                closeModal={this.closeModal}
                                lastImg={this.modalLastImg}
                                nextImg={this.modalNextImg} />
                            :
                            ''
                    }
                </div>
            </div>
        )
    }

}

export default PortfolioGenre