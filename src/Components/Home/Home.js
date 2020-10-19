import React from 'react'
import './Home.css'

import NavBar from '../NavBar/NavBar'
import Gallery from '../Gallery/Gallery'

function Home() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <Gallery />
            </div>
        </div>
    )
}

export default Home