import './Gallery.css'
import photoData from '../../PhotoData.json'

const horizontalImgs = photoData.filter(x => x.orientation === 'horizontal')
const squareableImgs = photoData.filter(x => x.squareable === true)
const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

function getRandomHorizontalImg() {
    let randomHorizontalImg = horizontalImgs[Math.floor(Math.random() * horizontalImgs.length)]
    return (<picture>
        <source
            srcSet={`
                    ${workSampleResourceBucket}${randomHorizontalImg.fileName}-small.webp 400w,
                    ${workSampleResourceBucket}${randomHorizontalImg.fileName}-medium.webp 1000w,
                    ${workSampleResourceBucket}${randomHorizontalImg.fileName}-large.webp 2000w
                    `}
            type="image/webp" />
        <img
            src={`https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/${randomHorizontalImg.fileName}.jpg`}
            alt={randomHorizontalImg.alt}
            className="galleryImgs horizontalImg" />
    </picture>)
}
function getRandomSquareableImg() {
    let randomSquareableImg = squareableImgs[Math.floor(Math.random() * squareableImgs.length)]
    return (<picture>
        <source
            srcSet={`
                    ${workSampleResourceBucket}${randomSquareableImg.fileName}-small.webp 400w,
                    ${workSampleResourceBucket}${randomSquareableImg.fileName}-medium.webp 1000w,
                    ${workSampleResourceBucket}${randomSquareableImg.fileName}-large.webp 2000w
                    `}
            type="image/webp" />
        <img
            src={`https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/${randomSquareableImg.fileName}.jpg`}
            alt={randomSquareableImg.alt}
            className="galleryImgs squareableImg" />
    </picture>)
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