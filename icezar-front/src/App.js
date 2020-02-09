import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'

import './css/front.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
          <Route exact path="/" render={props => <Main {...props} />} />
        <Footer />
      </div>
    );
  }
}

export default App
