import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home/Home'
import Error from '../Error/Error'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App