import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './App.css'

import Home from '../Home/Home'
import Portfolio from '../Portfolio/Portfolio'
import Portraits from '../Portraits/Portraits'
import Couples from '../Couples/Couples'
import Nature from '../Nature/Nature'
import Travel from '../Travel/Travel'
import Pricing from '../Pricing/Pricing'
import About from '../About/About'
import Error from '../Error/Error'

function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" component={Home} exact />

                    <Route path="/portfolio" component={Portfolio} exact />
                    <Route path="/portfolio/portraits" component={Portraits} />
                    <Route path="/portfolio/couples" component={Couples} />
                    <Route path="/portfolio/nature" component={Nature} />
                    <Route path="/portfolio/travel" component={Travel} />

                    <Route path="/pricing" component={Pricing} />

                    <Route path="/about" component={About} />

                    <Route component={Error} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App