import React, { Component } from 'react'

import BlogHeader from './BlogsHeader'
import Blogs from './Blogs'
import BlogsNavigation from './BlogsNavigation'
class Main extends Component {

  render() {
    return (
      <main id="content" role="main">
        <BlogHeader />        
        <div className="container space-3-bottom--lg">
          <div className="row">
            <Blogs />
            <BlogsNavigation/>
          </div>
        </div>        
      </main>
    )
  }
    
}
    
    export default Main;
