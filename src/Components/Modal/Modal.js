import React from 'react'
import './Modal.css'

import AOS from 'aos'
import 'aos/dist/aos.css';

const awsResourceLibWorkPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/work-samples/"

class Modal extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div id="modal-container" className={this.props.modalVisibility ? 'modalSee' : 'modalNoSee'}>
                <button id="modal-close">×</button>
            </div>
        )
    }
}

// class Modal extends React.Component {
//     constructor(props) {
//         super()

//         this.lastImage = this.lastImage.bind(this)

//         this.state = {
//             currentImgIndex: 0
//         }
//     }

//     lastImage() {
//         let currentModalImg = this.props.modalArray.find(x => x.fileName === this.props.modalImage)
//         let currentImgIndex = this.props.modalArray.indexOf(currentModalImg)
//         let currentModalLength = this.props.modalArray.length
        
//         if (currentImgIndex < 1) {
//             currentImgIndex = currentModalLength - 1
//         } else {
//             currentImgIndex--
//         }
//     }

//     nextImage() {
//         console.log('next')
//     }

//     render() {
//         AOS.init()
//         return (
//             <div id="modal-container" className={this.props.modalVisibility ? 'visible' : 'invisible'}>
//                 <button id="modal-close" onClick={this.props.closeModal}>×</button>
//                 <img
//                     src={`${awsResourceLibWorkPrefix}${this.props.modalArray[this.state.currentImgIndex]}.jpg`}
//                     alt={this.props.modalAlt}
//                     type="img/jpeg"
//                     id="modal-image"
//                     className="genrePhoto"
//                         data-aos="fade-up"
//                         data-aos-once="true" />
//                 <p id="carousel-nav">
//                     <span onClick={this.lastImage}>last</span>
//                     •
//                     next
//                 </p>
//             </div>
//         )
//     }
// }

export default Modal