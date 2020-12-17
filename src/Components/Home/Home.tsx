import React from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import PortfolioGenres from '../PortfolioGenres/PortfolioGenres'
import './Home.css'

const baseResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"
const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

const featuredPhotoLibrary = [
    {
        fileName: "25D111F2-7266-4792-B73E-365BB171438B",
        alt: "A young couple kisses in the foreground while the sun glistens on a small waterfall in the background"
    },
    {
        fileName: "CAB8171E-3485-4AAB-9875-AD86EF8957CF",
        alt: "A young woman stands in an open field with her hands behind her head looking into the distance"
    },
    {
        fileName: "5740DA5D-ADEA-44A5-BFD3-459B207CB066",
        alt: "Lilly pads"
    }
]

export default function Home() {
    AOS.init({
        duration: 1200,
        once: true
    })

    return (<div className="pageContent">
        <div id="main">
            <picture id="mainPhoto">
                    <source
                        srcSet={`
                                ${baseResourceBucket}mainProfile-small.webp 400w,
                                ${baseResourceBucket}mainProfile-medium.webp 1000w,
                                ${baseResourceBucket}mainProfile-large.webp 2000w
                                `}
                        type="image/webp" />
                    <img
                        src={`${baseResourceBucket}mainProfile.jpg`}
                        alt="Chloe Lechel profile"
                        className="workSample"
                            data-aos="fade-up"
                            data-aos-once="true" />
                </picture>
            <div id="main-text">
                <h2>You're about to look</h2>
                <h1 data-aos="fade-right">so good<span className="desktopOnly">.</span></h1>
                <p id="description">
                    Chloe Lechel is a pro photographer based in Northeastern Indiana.
                </p>
            </div>
        </div>

        <p id="scrollForMore" className="desktopOnly">scroll for more</p>

        {
            featuredPhotoLibrary.map((x, i) => {
                return (<picture key={i}>
                    <source
                        srcSet={`
                                ${workSampleResourceBucket}${x.fileName}-small.webp 400w,
                                ${workSampleResourceBucket}${x.fileName}-medium.webp 1000w,
                                ${workSampleResourceBucket}${x.fileName}-large.webp 2000w
                                `}
                        type="image/webp" />
                    <img
                        src={`${workSampleResourceBucket}${x.fileName}.jpg`}
                        alt={x.alt}
                        className="workSample"
                            data-aos="fade-up"
                            data-aos-once="true" />
                </picture>)
            })
        }

        <h1 id="seeMore">View my portfolio</h1>
        <PortfolioGenres />

    </div>)
}