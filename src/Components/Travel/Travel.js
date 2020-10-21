import React from 'react'
import './Travel.css'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'

function Travel() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <Carousel category="travel" />
            </div>
        </div>
    )
}

export default Travel