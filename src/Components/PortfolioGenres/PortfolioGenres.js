import React from 'react'
import './PortfolioGenres.css'

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

const portfolioGenreLibrary = [
    {
        title: "portraits",
        imgFileName: "spirit",
        imgAlt: ""
    },
    {
        title: "couples",
        imgFileName: "golden",
        imgAlt: ""
    },
    {
        title: "nature",
        imgFileName: "lilly",
        imgAlt: ""
    },
    {
        title: "travel",
        imgFileName: "bay",
        imgAlt: ""
    }
]

function PortfolioGenres() {
    return (
        <ul id="portfolioGenres">
            {
                portfolioGenreLibrary.map(x => {
                    return (
                        <li key={x.title}>
                            <a href={`/portfolio/${x.title}`}>
                                <img
                                    src={`${awsResourceLibraryPrefix}${x.imgFileName}.jpg`}
                                    alt={x.imgAlt} />
                                <p>{x.title}</p>
                            </a>
                        </li>
                    )
                })
            }
        </ul>
    )
}

export default PortfolioGenres