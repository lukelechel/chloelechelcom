import React from 'react'
import './Travel.css'
import NavBar from '../NavBar/NavBar'
import CollectionTitle from '../CollectionTitle/CollectionTitle'
import Carousel from '../Carousel/Carousel'

function Travel() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <CollectionTitle title="Travel" />
                <Carousel category="travel" />
            </div>
        </div>
    )
}

export default Travel