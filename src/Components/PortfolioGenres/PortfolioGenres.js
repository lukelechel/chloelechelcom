import React from 'react'
import './PortfolioGenres.css'
import photoData from '../../PhotoData.json'

const awsResourceLibWorkPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

const portfolioGenreLibrary = [

    {
        categoryTitle: "weddings",
        fileName: "IMG_4269"
    },
    {
        categoryTitle: "nature",
        fileName: "5740DA5D-ADEA-44A5-BFD3-459B207CB066"
    },
    {
        categoryTitle: "couples",
        fileName: "25D111F2-7266-4792-B73E-365BB171438B"
    },
    {
        categoryTitle: "travel",
        fileName: "F24CBA41-B716-4A13-B702-85049064DEF1"
    },
    {
        categoryTitle: "portraits",
        fileName: "CAB8171E-3485-4AAB-9875-AD86EF8957CF"
    }
]

function PortfolioGenres() {
    return (
        <ul id="portfolioGenres">
            {
                portfolioGenreLibrary.map(x => {
                    let imgAlt = photoData.filter(items => items.fileName === x.fileName)
                    return (
                        <li key={x.categoryTitle}>
                            <a href={`/portfolio/${x.categoryTitle}`}>
                                <img
                                    src={`${awsResourceLibWorkPrefix}${x.fileName}.jpg`}
                                    alt={imgAlt} />
                                <p>{x.categoryTitle}</p>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default PortfolioGenres