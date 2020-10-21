import React from 'react'
import './Couples.css'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'

function Couples() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <Carousel category="couple" />
            </div>
        </div>
    )
}

export default Couples