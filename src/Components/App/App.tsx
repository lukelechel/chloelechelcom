import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Nav from '../Nav/Nav'
import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import PortfolioGenre from '../PortfolioGenre/PortfolioGenre'
import About from '../About/About'
import Error from '../Error/Error'

const App = () => (<BrowserRouter>
    <Switch>
        <Route path="/" exact>
            <Nav />
            <Home />
        </Route>

        <Route path="/portfolio" exact>
            <Nav />
            <Portfolio />
        </Route>

        <Route path="/portfolio/:id">
            <Nav />
            <PortfolioGenre />
        </Route>

        <Route path="/about">
            <Nav />
            <About />
        </Route>

        <Route>
            <Nav />
            <Error />
        </Route>
    </Switch>
</BrowserRouter>)

export default App