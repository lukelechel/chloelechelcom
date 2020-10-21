import React from 'react'
import './Home.css'

import NavBar from '../NavBar/NavBar'
import Megatron from '../Megatron/Megatron'

const awsResourceLibraryPrefix = "https://chloelechelcom-resources.s3.us-east-2.amazonaws.com/"

function Home() {
    return (
        <div>
            <NavBar />
            <Megatron title="You're about to look" subtitle="so good" />
            <div className="pageContent">
                <img src={`${awsResourceLibraryPrefix}work-samples/golden.jpg`} className="workSample" />
            </div>
        </div>
    )
}

export default Home