import AOS from 'aos'
import 'aos/dist/aos.css'
import './MainPortGenreList.css'

const workSampleResourceBucket = "https://d26jazm7hunrwx.cloudfront.net/work-samples/"

interface GenrePhotoBase {
    fileName: string,
    alt: string,
    width: number,
    height: number
}

export default function MainPortGenreList(props:any) {
    AOS.init({
        duration: 1200
    })

    return (<div id="MainPortGenreList-container">
        {props.genrePhotoArray.map((x:GenrePhotoBase, i:number) => {return (
            <img
                key={i}
                onClick={() => props.imageSelected(x.fileName, x.alt, x.width, x.height)}
                src={`${workSampleResourceBucket}${x.fileName}.jpg`}
                alt={x.alt}
                max-width={x.width}
                loading="lazy"
                className="genrePhoto"
                    data-aos="fade-up"
                    data-aos-once="true" />)})}
    </div>)
}