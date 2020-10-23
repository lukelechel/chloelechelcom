import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import PortfolioGenre from '../PortfolioGenre/PortfolioGenre'
import About from '../About/About'
import Error from '../Error/Error'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact />

                    <Route path="/portfolio" component={Portfolio} exact />
                    <Route path="/portfolio/:id" component={PortfolioGenre} />

                    <Route path="/about" component={About} />

                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App