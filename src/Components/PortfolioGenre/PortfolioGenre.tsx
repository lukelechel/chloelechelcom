import React, { useState } from 'react'
import './PortfolioGenre.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import MainPortGenreList from '../MainPortGenreList/MainPortGenreList'
import Modal from '../Modal/Modal'
import { useParams } from 'react-router-dom'
import photoData from '../../PhotoData.json'

interface ImageObjectBase {
    fileName: string,
    alt: string,
    category: string,
    orientation: string,
    squareable: boolean
}

export default function PortfolioGenre() {

    const [genrePhotoArray, setGenrePhotoArray] = useState<ImageObjectBase[]>([])
    const [selectedImage, setSelectedImage] = useState(String)
    const [modalVisibility, setModalVisibility] = useState(false)

    function GetGenreTitle() {
        let { currentGenre }:any = useParams()
        return currentGenre
    }
    function getRefinedGenreTitle() {
        let currentGenre = GetGenreTitle()
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

    function getGenrePhotos() {
        // Purpose: Gets right genre of photos, randomizes order, sets newly randomized array as genrePhotoArray state
        // Save the right genre of images
        let genrePhotos:any
        genrePhotos = photoData.filter(x => x.category === getRefinedGenreTitle())
        // Randomize the list of genre photos
        let thisIndex = genrePhotos.length, tempValue, randomIndex
        while (0!== thisIndex) {
            // Pick a remaining element
            randomIndex = Math.floor(Math.random() * thisIndex)
            thisIndex -= 1
            // And swap it with the current element
            tempValue = genrePhotos[thisIndex]
            genrePhotos[thisIndex] = genrePhotos[randomIndex]
            genrePhotos[randomIndex] = tempValue
        }
        return setGenrePhotoArray(genrePhotos)
    }

    function imageSelected(photoInfo:string) {
        document.body.style.position = 'fixed'
        setSelectedImage(photoInfo)
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

    getGenrePhotos()

    AOS.init({
        duration: 1200
    })

    return (<div id="genre-container">
        <div className="pageContent">
            <h1 id="categoryTitle">{GetGenreTitle()}</h1>
            <MainPortGenreList genrePhotoArray={genrePhotoArray} imageSelected={imageSelected} />
            {
                modalVisibility ?
                <Modal
                    selectedImage={selectedImage}
                    modalVisibility={modalVisibility}
                    closeModal={closeModal}
                    lastImg={modalLastImg}
                    nextImg={modalNextImg} />
                :
                null
            }
            <h1 id="seeMore">See more</h1>
            <PortfolioGenres />
        </div>
    </div>)
}