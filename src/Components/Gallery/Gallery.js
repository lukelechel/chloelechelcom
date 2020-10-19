import React from 'react'
import './Gallery.css'
import galleryData from './GalleryData.json'

const horizontalImgs = galleryData.filter(x => x.orientation === 'horizontal')
const squareableImgs = galleryData.filter(x => x.squareable === true)

function getRandomHorizontalImg() {
    let randomHorizontalImg = horizontalImgs[Math.floor(Math.random() * horizontalImgs.length)]
    return (
        <img
            src={`https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/${randomHorizontalImg.title}.jpg`}
            alt={randomHorizontalImg.alt}
            className="galleryImgs horizontalImg" />
    )
}
function getRandomSquareableImg() {
    let randomSquareableImg = squareableImgs[Math.floor(Math.random() * squareableImgs.length)]
    return (
        <img
            src={`https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/${randomSquareableImg.title}.jpg`}
            alt={randomSquareableImg.alt}
            className="galleryImgs squareableImg" />
    )
}

function Gallery() {
    return (
        <div id="gallery-container">
            { getRandomHorizontalImg() }
            { getRandomSquareableImg() }
            { getRandomSquareableImg() }
            { getRandomHorizontalImg() }
            { getRandomHorizontalImg() }
            { getRandomSquareableImg() }
        </div>
    )
}

export default Gallery