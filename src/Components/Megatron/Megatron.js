import React from 'react'
import './Megatron.css'

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

class Megatron extends React.Component {
    checkSecondSubtitle() {
        if (this.props.megatronData.secondSubtitle) {
            const secondSubtitle = this.props.megaTronData.secondSubtitle
            return {secondSubtitle}
        }
    }

    render() {
        return (
            <div>
                <div className="megatron">
                    <picture>
                        {/* <source
                                srcSet={`
                                        ${awsResourceLibraryPrefix}mainProfile-small.webp 400w,
                                        ${awsResourceLibraryPrefix}mainProfile-medium.webp 1000w
                                        `}
                                type="image/webp" /> */}
                        <img
                            src={`${awsResourceLibraryPrefix}mainProfile.jpg`}
                            alt="Chloe Lechel profile"
                            className="megaImg" />
                    </picture>
                    <h1 className="megaTitle">{this.props.title}</h1>
                    <h2 className="megaSubtitle">{this.props.subtitle}</h2>
                </div>
            </div>
        )
    }
}

export default Megatron