import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './components/Header/'
import SideNav from './components/SideNav/'
import MainTitle from './components/MainTitle/'
import BlogCategory from './components/Blogging/'
import BlogDetail from './components/Blogging/BlogDetail'

import fetch from 'node-fetch'
import queryString from 'query-string'

import * as constants from './Constants'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      blogs: []
    }
  }

  fetchBlogs = (params) => {

    let pageNumber = params.pageNumber || 0;
    let requestType = params.requestType || 'blogs';
    let queryParams = {page: pageNumber};

    let fetchUrl = constants.API_URL+requestType+'?'+queryString.stringify(queryParams);

    fetch(fetchUrl, {
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    })
    .then(result => {
      return result.json();
    })
    .then(json => {
      this.setState({
        blogs: json.blogs
      })
    });
  }

  componentDidMount() {
    this.fetchBlogs({});
  }


  render() {

    return (
      <div>

        <Header />

        <div className="container-fluid">
          <div className="row flex-xl-nowrap">

            {/* <!-- ========== LEFT ========== --> */}
            <SideNav />
            {/* <!-- ========== END LEFT ========== --> */}

            {/* <!-- ========== MAIN ========== --> */}
            <main className="col-12 col-md-9 col-xl-10 fd-content u-space-3" role="main">


              <Route exact path='/' render={(props) => (
                <div>
                  <MainTitle  title="News Blogs"
                              description="To help you reach your audience in a personal and more informal way, Front includes several News Blogs to start with."
                  />
                  <BlogCategory   {...props}
                                  blogs={this.state.blogs}/>
                </div>
              )}/>
              <Route path='/blogs/:catId' render={(props) => (
                <div>
                  <MainTitle  title="News Blogs"
                              description="To help you reach your audience in a personal and more informal way, Front includes several News Blogs to start with."
                  />
                  <BlogCategory   {...props}
                                  blogs={this.state.blogs}/>
                </div>
              )}/>
            <Route path='/blog/:id' render={(props) => (
                <BlogDetail {...props} />
            )}/>


            </main>

            {/* <!-- ========== END MAIN ========== --> */}


          </div>
        </div>

        {/* <main id="content" role="main">

        </main> */}

      </div>
    );
  }
}

export default App;
