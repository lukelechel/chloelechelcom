import React from 'react'
import './Portraits.css'
import NavBar from '../NavBar/NavBar'
import CollectionTitle from '../CollectionTitle/CollectionTitle'
import Carousel from '../Carousel/Carousel'

function Portraits() {
    return (
        <div>
            <NavBar />
            <div id="portraits-container" className="pageContent">
                <CollectionTitle title="Portraits" />
                <Carousel category="portrait" />
            </div>
        </div>
    )
}

export default Portraits