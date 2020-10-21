import React from 'react'
import './Nature.css'
import NavBar from '../NavBar/NavBar'
import Carousel from '../Carousel/Carousel'

function Nature() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <Carousel category="nature" />
            </div>
        </div>
    )
}

export default Nature