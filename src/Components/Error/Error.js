import React from 'react'
import './Error.css'

import NavBar from '../NavBar/NavBar'

function Error() {
    return (
        <div id="error-container">
            <NavBar />
            <div className="pageContent">
                <h1>404</h1>
                <p>Sorry, what you're looking for isn't here. Let's get you going in the right direction again.</p>
                <h1><a href="/" alt="home">Go Home</a></h1>
            </div>
        </div>
    )
}

export default Error