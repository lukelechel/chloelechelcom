import React from 'react'
import './Clients.css'

import photoData from '../../PhotoData.json'

import NavBar from '../NavBar/NavBar'

const clientLibrary = [
    "EvanMiren"
]

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

function Clients() {
    return (
        <div>
            <NavBar />
            <div className="pageContent">
                <h1>Clients</h1>
                {
                    clientLibrary.map(client => photoData.filter(img => img.clientName === client).map(x => {
                        return (
                            <img src={`${awsResourceLibraryPrefix}work-samples/${x.title}.jpg`} alt={x.alt} className="client" />
                        )
                    }))
                }
            </div>
        </div>
    )
}

export default Clients