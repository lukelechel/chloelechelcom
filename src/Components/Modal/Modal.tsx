import React from 'react'
import './Modal.css'

const workSampleResourceBucket = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

export default function Modal(props:any) {
    const photoInfo = props.selectedImage
    return (
        <div id="modal-container" className={props.modalVisibility ? 'modalVisible' : 'modalInvisible'}>
            <button id="modal-close" onClick={props.closeModal}>×</button>
            <img
                src={`${workSampleResourceBucket}${photoInfo.fileName}.jpg`}
                alt={photoInfo.fileName}
                id="modal-image" />
            <p id="carousel-nav">
                <span onClick={props.lastImg}>last</span>
                •
                <span onClick={props.nextImg}>next</span>
            </p>
        </div>
    )
}