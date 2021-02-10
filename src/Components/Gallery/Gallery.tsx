import './Gallery.css'
import photoData from '../../PhotoData.json'

const horizontalImgs = photoData.filter(x => x.orientation === 'horizontal')
const squareableImgs = photoData.filter(x => x.squareable === true)
const workSampleResourceBucket = "https://d26jazm7hunrwx.cloudfront.net/work-samples/"

function getRandomHorizontalImg() {
    let randomHorizontalImg = horizontalImgs[Math.floor(Math.random() * horizontalImgs.length)]
    return (<img
        src={`${workSampleResourceBucket}${randomHorizontalImg.fileName}.jpg`}
        alt={randomHorizontalImg.alt}
        width={randomHorizontalImg.width}
        height={randomHorizontalImg.height}
        loading="lazy"
        className="galleryImgs horizontalImg" />)
}
function getRandomSquareableImg() {
    let randomSquareableImg = squareableImgs[Math.floor(Math.random() * squareableImgs.length)]
    return (<img
        src={`${workSampleResourceBucket}${randomSquareableImg.fileName}.jpg`}
        alt={randomSquareableImg.alt}
        width={randomSquareableImg.width}
        height={randomSquareableImg.height}
        loading="lazy"
        className="galleryImgs squareableImg" />)
}

const Gallery = () => (<div id="gallery-container">
    { getRandomHorizontalImg() }
    { getRandomSquareableImg() }
    { getRandomSquareableImg() }
    { getRandomHorizontalImg() }
    { getRandomHorizontalImg() }
    { getRandomSquareableImg() }
</div>)

export default Gallery