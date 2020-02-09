import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from "react-router-dom"

import App from './App'

// import "bootstrap/dist/css/bootstrap.min.css"
// import "bootstrap/dist/js/bootstrap"
// import "animate.css/animate.min.css"
// import "font-awesome/css/font-awesome.css"
// import 'feathericon/build/css/feathericon.min.css'

const rootElement = (
    <Router>
        <Route path="/" component={App} />
    </Router>
)

ReactDOM.render(
    rootElement,
    document.getElementById('root')
)
