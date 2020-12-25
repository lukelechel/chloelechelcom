import AOS from 'aos'
import 'aos/dist/aos.css'
import './MainPortGenreList.css'

const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

interface GenrePhotoBase {
    fileName: string,
    alt: string
}

export default function MainPortGenreList(props:any) {
    AOS.init({
        duration: 1200
    })

    return (<div id="MainPortGenreList-container">
        {
            props.genrePhotoArray.map((x:GenrePhotoBase, i:number) => {
                return (
                    <picture key={i} onClick={() => props.imageSelected(x.fileName, x.alt)}>
                        <source
                            srcSet={`
                                ${workSampleResourceBucket}${x.fileName}-small.webp 400w,
                                ${workSampleResourceBucket}${x.fileName}-medium.webp 1000w,
                                ${workSampleResourceBucket}${x.fileName}-large.webp 2000w
                                `}
                            type="image/webp"
                            className="genrePhoto" />
                        <img
                            src={`${workSampleResourceBucket}${x.fileName}.jpg`}
                            alt={x.alt}
                            className="genrePhoto"
                                data-aos="fade-up"
                                data-aos-once="true" />
                    </picture>
                )
            })
        }
    </div>)
}