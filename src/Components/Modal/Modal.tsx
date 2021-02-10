import './Modal.css'

const workSampleResourceBucket = "https://d26jazm7hunrwx.cloudfront.net/work-samples/"

export default function Modal(props:any) {

    const photoName:string = props.selectedImage
    const photoAlt:string = props.selectedImageAlt
    return (
        <div id="modal-container" className={props.modalVisibility ? 'modalVisible' : 'modalInvisible'}>
            <button id="modal-close" onClick={props.closeModal}>×</button>
            <img
                src={`${workSampleResourceBucket}${photoName}.jpg`}
                alt={photoAlt}
                id="modal-image" />
            <p id="carousel-nav">
                <span onClick={props.lastImg}>last</span>
                •
                <span onClick={props.nextImg}>next</span>
            </p>
        </div>
    )
}