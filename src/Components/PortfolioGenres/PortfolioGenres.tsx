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
        fileName: "IMG_4283",
        alt: "Colorful fall trees stand in the background, with a body of water in the foreground"
    },
    {
        categoryTitle: "couples",
        fileName: "IMG_3088",
        alt: "Young man and woman smile sitting together with her right arm around his back and her left arm on his shoulder"
    },
    {
        categoryTitle: "travel",
        fileName: "FE4BC292-A1CD-42F2-BE99-05985320406A-04DE039C-FD03-40DF-BA12-080AB3F38243",
        alt: "Tall trees with a pink and purple sky in the background"
    },
    {
        categoryTitle: "portraits",
        fileName: "IMG_4374",
        alt: "Young, sunlit girl standing with her face to the camera with gray sky in the background"
    }
]

const PortfolioGenres = () => (<ul id="portfolioGenres">
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
</ul>)

export default PortfolioGenres