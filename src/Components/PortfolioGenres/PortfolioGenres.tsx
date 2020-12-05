import React from 'react'
import './PortfolioGenres.css'

const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

const portfolioGenreLibrary = [
    {
        categoryTitle: "weddings",
        fileName: "IMG_4269",
        alt: "Bridesmaids surround bride who is holding her bouquet"
    },
    {
        categoryTitle: "nature",
        fileName: "5740DA5D-ADEA-44A5-BFD3-459B207CB066",
        alt: "Lilly pads"
    },
    {
        categoryTitle: "couples",
        fileName: "25D111F2-7266-4792-B73E-365BB171438B",
        alt: "A young couple kisses in the foreground while the sun glistens on a small waterfall in the background"
    },
    {
        categoryTitle: "travel",
        fileName: "F24CBA41-B716-4A13-B702-85049064DEF1",
        alt: "Boat on a gray day"
    },
    {
        categoryTitle: "portraits",
        fileName: "CAB8171E-3485-4AAB-9875-AD86EF8957CF",
        alt: "A young woman stands in an open field with her hands behind her head looking into the distance"
    }
]

export default function PortfolioGenres() { return (<ul id="portfolioGenres">
    {
        portfolioGenreLibrary.map(x => {
            return (
                <li key={x.categoryTitle}>
                    <a href={`/portfolio/${x.categoryTitle}`}>
                        <picture>
                            <source
                                srcSet={`
                                    ${workSampleResourceBucket}${x.fileName}-small.webp 400w,
                                    ${workSampleResourceBucket}${x.fileName}-medium.webp 1000w,
                                    ${workSampleResourceBucket}${x.fileName}-large.webp 2000w
                                    `}
                                type="image/webp" />
                            <img
                                src={`${workSampleResourceBucket}${x.fileName}.jpg`}
                                alt={x.alt} />
                        </picture>
                        <p>{x.categoryTitle}</p>
                    </a>
                </li>
            )
        })
    }
</ul>) }