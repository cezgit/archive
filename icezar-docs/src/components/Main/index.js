import React, { Component } from 'react';

import MainNav from '../MainNav'
import MainContent from '../MainContent'
import SecondaryNav from '../SecondaryNav'

class Main extends Component {

  render() {
    return (
      <div className="container-fluid">
        <div className="row flex-xl-nowrap">

          <MainNav />
          <MainContent />
          <SecondaryNav />

        </div>
      </div>
    );
  }
    
}
    
    export default Main;
