import React from 'react'
import {render} from 'react-dom'
import {HashRouter as Router, Route} from 'react-router-dom'
import ReactDnD11 from "./ReactDnD11";

render((
    <Router>
        <Route exact path="/" component={ReactDnD11}/>
    </Router>
), document.getElementById('root'))

