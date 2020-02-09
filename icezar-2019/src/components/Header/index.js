import React from 'react'
import { NavLink } from 'react-router-dom'

import * as constants from '../../Constants'

const Header = (props) => {

    let doSearch = (e) => {
      e.preventDefault()
      let searchUrl = constants.API_URL + 'search?query='
      console.log('Header - setting url: '+e.target.value)
      props.setUrl(searchUrl+e.target[0].value)
    }

    return (
      <header role="banner">
        <nav className="navbar navbar-expand-md navbar-light bg-white absolute-top">
          <div className="container">

            <button className="navbar-toggler order-2 order-md-1" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button> 

            <div className="collapse navbar-collapse order-3 order-md-2" id="navbar">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to='/' className='nav-link' activeClassName='active' onClick={() => props.setUrl(constants.API_URL + 'blogs')}>Home</NavLink>                
                </li>
                <li className='nav-item'>
                  <NavLink to='/about' className='nav-link' activeClassName='active'>About</NavLink>                
                </li>
              </ul>
            </div>
            <a className="navbar-brand mx-auto order-1 order-md-3" href="index.html">iCezar</a>
            <div className="collapse navbar-collapse order-4 order-md-4" id="navbar">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <NavLink to='/contact' className='nav-link' activeClassName='active'>Contact</NavLink> 
                </li>
                <form className="form-inline" role="search" onSubmit={doSearch}>
                  <input className="search js-search form-control form-control-rounded mr-sm-2" type="text" title="Enter search query here.." placeholder="Search.." aria-label="Search"></input>
                </form>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
  }

export default Header
