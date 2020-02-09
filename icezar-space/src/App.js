import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// import './assets/css/theme.css'
// import './assets/css/starter.css'

import Header from './components/Header'
import Blogging from './components/Blogging/'
import Footer from './components/Footer'

class App extends Component {

  render() {
    return <div>
        <Header />
        <Route exact path="/" render={props => <Blogging {...props} />} />
        <Route path="/blogs" render={props => <Blogging {...props} />} />
        {/* <Route path="/blog/:id" render={props => <Article {...props} />} />         */}

        {/* <Footer /> */}
      </div>;
  }
}

export default App
