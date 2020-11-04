import React from 'react'
import './MainPortGenreList.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

const awsResourceLibWorkPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

const MainPortGenreList = (props) => {
    
    AOS.init({
        duration: 1200
    })

    return (
        <div id="MainPortGenreList-container">
            {
                props.genrePhotoArray.map((x, i) => {
                    return (
                        <picture key={i} onClick={() => props.imageSelected(x)}>
                            <source
                                srcSet={`
                                    ${awsResourceLibWorkPrefix}${x.fileName}-small.webp 400w,
                                    ${awsResourceLibWorkPrefix}${x.fileName}-medium.webp 1000w,
                                    ${awsResourceLibWorkPrefix}${x.fileName}-large.webp 2000w
                                    `}
                                type="image/webp" />
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
        </div>
    )
}

export default MainPortGenreList