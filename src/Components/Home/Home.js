import React from 'react'
import './Home.css'

import NavBar from '../NavBar/NavBar'

function Home() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <h1>home</h1>
            </div>
        </div>
    )
}

export default Home