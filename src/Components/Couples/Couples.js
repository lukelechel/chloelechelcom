import React from 'react'
import './Couples.css'
import NavBar from '../NavBar/NavBar'
import CollectionTitle from '../CollectionTitle/CollectionTitle'
import Carousel from '../Carousel/Carousel'

function Couples() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <CollectionTitle title="Couples" />
                <Carousel category="couple" />
            </div>
        </div>
    )
}

export default Couples