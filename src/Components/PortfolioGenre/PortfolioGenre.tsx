import React, { useEffect, useState } from 'react'
import './PortfolioGenre.css'
import photoData from '../../PhotoData.json'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import MainPortGenreList from '../MainPortGenreList/MainPortGenreList'
import Modal from '../Modal/Modal'
import { useParams } from 'react-router-dom'

interface GenrePhotoBase {
    fileName: string,
    alt: string,
    category: string,
    orientation: string,
    squareable: boolean
}

export default function PortfolioGenre() {

    // State mangement
    const [genrePhotoArray, setGenrePhotoArray] = useState<GenrePhotoBase[]>([])
    const [selectedImage, setSelectedImage] = useState(String)
    const [selectedImageAlt, setSelectedImageAlt] = useState(String)
    const [modalVisibility, setModalVisibility] = useState(false)

    // Param grab called "id"
    let { id }:any = useParams();

    function imageSelected(photoName:string, photoAlt:string) {
        document.body.style.position = 'fixed'
        setSelectedImage(photoName)
        setSelectedImageAlt(photoAlt)
        setModalVisibility(true)
    }

    function closeModal() {
        document.body.style.position = ''
        setSelectedImage(String)
        setModalVisibility(false)
    }

    function modalLastImg() {
        // initially selected img object, will update
        let carouselIndex = genrePhotoArray.findIndex(x => x.fileName === selectedImage)
        // length of carousel
        let carouselLength = genrePhotoArray.length
        // get index pos of selected img object
        let indexOfSelectedImg = genrePhotoArray.findIndex(x => x.fileName === selectedImage)

        if (indexOfSelectedImg < 1) {
            carouselIndex = carouselLength - 1
        } else {
            carouselIndex = indexOfSelectedImg - 1
        }

        // find img object associated with the new carousel index
        let newCarouselIndex = genrePhotoArray[carouselIndex].fileName

        return setSelectedImage(newCarouselIndex)
    }
    function modalNextImg() {
        // initially selected img object, will update
        let carouselIndex = genrePhotoArray.findIndex(x => x.fileName === selectedImage)
        // get index pos of selected img object
        let indexOfSelectedImg = genrePhotoArray.findIndex(x => x.fileName === selectedImage)

        if (indexOfSelectedImg === carouselIndex - 1) {
            carouselIndex = 0
        } else {
            carouselIndex = indexOfSelectedImg + 1
        }

        // find img object associated with the new carousel index
        let newCarouselIndex = genrePhotoArray[carouselIndex].fileName

        return setSelectedImage(newCarouselIndex)
    }

    useEffect(() => {
        AOS.init({
            duration: 1200
        })

        // Refines genre title to one compatible with photoData
        let currentGenre:string
        if (id === 'portraits') {
            currentGenre = 'portrait'
        } else if (id === 'couples') {
            currentGenre = 'couple'
        } else if (id === 'weddings') {
            currentGenre = 'wedding'
        } else {
            currentGenre = id
        }
        let currentGenreName = photoData.filter(x => x.category === currentGenre)
        setGenrePhotoArray(currentGenreName)
    }, [id])

    return (<div id="genre-container">
        <div className="pageContent">
            <h1 id="categoryTitle">{id}</h1>
            <MainPortGenreList genrePhotoArray={genrePhotoArray} imageSelected={imageSelected} />
            {
                modalVisibility ?
                    <Modal
                        selectedImage={selectedImage}
                        selectedImageAlt={selectedImageAlt}
                        modalVisibility={modalVisibility}
                        closeModal={closeModal}
                        lastImg={modalLastImg}
                        nextImg={modalNextImg} />
                    :
                    ''
            }
            <h1 id="seeMore">See more</h1>
            <PortfolioGenres />
        </div>
    </div>)
}