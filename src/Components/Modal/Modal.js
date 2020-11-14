import React from 'react'
import './Modal.css'

const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

class Modal extends React.Component {
    constructor(props) {
        super()
    }

    render() {

        const photoInfo = this.props.selectedImage

        return (
            <div id="modal-container" className={this.props.modalVisibility ? 'modalVisible' : 'modalInvisible'}>
                <button id="modal-close" onClick={this.props.closeModal}>×</button>
                <img
                    src={`${workSampleResourceBucket}${photoInfo.fileName}.jpg`}
                    alt={photoInfo.fileName}
                    id="modal-image" />
                <p id="carousel-nav">
                    <span onClick={this.props.lastImg}>last</span>
                    •
                    <span onClick={this.props.nextImg}>next</span>
                </p>
            </div>
        )
    }
}

export default Modal