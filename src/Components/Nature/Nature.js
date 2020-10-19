import React from 'react'
import './Nature.css'
import NavBar from '../NavBar/NavBar'
import CollectionTitle from '../CollectionTitle/CollectionTitle'
import Carousel from '../Carousel/Carousel'

function Nature() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <CollectionTitle title="Nature" />
                <Carousel category="nature" />
            </div>
        </div>
    )
}

export default Nature