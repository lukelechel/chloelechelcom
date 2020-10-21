import React from 'react'
import './Portraits.css'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'

function Portraits() {
    return (
        <div>
            <NavBar />
            <div id="portraits-container" className="pageContent">
                <Carousel category="portrait" />
            </div>
        </div>
    )
}

export default Portraits