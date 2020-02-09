import React, { Component } from 'react'
import { Route } from "react-router-dom"

import './scss/theme.css'
import './vendor/css/feather.min.css'

import logo from "./img/logo/logo-dark.png"
// import bgImage from "./img/homepages/marketing-seo/hero-bg.png"
// import marektingImage from "./img/homepages/marketing-seo/hero-img.png"

class App extends Component {
  render() {

    // var topSectionStyle = {
    //   backgroundColor: "#fbfaff", 
    //   backgroundImage: `url(${bgImage}`
    // };

    let offCanvasStyle = {
      height: 'calc(100% - 235px)',
      top: "144px"
    }

    return (
      <div>
        <div className="offcanvas-container is-triggered offcanvas-container-reverse" id="mobile-menu">
          <span className="offcanvas-close"><i className="fe-icon-x"></i></span>
          <div className="px-4 pb-4">
            <h6>Menu</h6>
          </div>
          <div className="offcanvas-scrollable-area border-top" style={offCanvasStyle}>
            <div className="accordion mobile-menu" id="accordion-menu">
              <div className="card">
                <div className="card-header">
                  <a className="mobile-menu-link active" href="index.html">Home</a>
                  <a className="collapsed" href="#home-submenu" data-toggle="collapse"></a>
                </div>
                <div className="collapse" id="home-submenu" data-parent="#accordion-menu">
                  <div className="card-body">
                    <ul>
                      <li className="dropdown-header"><i className="fe-icon-briefcase"></i>&nbsp;&nbsp;Portfolio</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="offcanvas-footer px-4 pt-3 pb-2 text-center">
            <a className="social-btn sb-style-3 sb-twitter" href="#"><i className="socicon-twitter"></i></a>
            <a className="social-btn sb-style-3 sb-facebook" href="#"><i className="socicon-facebook"></i></a>
            <a className="social-btn sb-style-3 sb-pinterest" href="#"><i className="socicon-pinterest"></i></a>
            <a className="social-btn sb-style-3 sb-instagram" href="#"><i className="socicon-instagram"></i></a>
          </div>
        </div>
        
        <header className="navbar-wrapper navbar-boxed navbar-sticky">
          <div className="container-fluid">
            <div className="d-table-cell align-middle pr-md-3">
              <a className="navbar-brand mr-1" href="index.html"><img src={logo} alt="CreateX" /></a>
            </div>
            <div className="d-table-cell w-100 align-middle pl-md-3">
              <div className="navbar justify-content-end justify-content-lg-between">              
                <form className="search-box" method="get">
                  <input type="text" id="site-search" placeholder="Type A or C to see suggestions" />><span className="search-close"><i className="fe-icon-x"></i></span>
                </form>
                <ul className="navbar-nav d-none d-lg-block">               
                  <li className="nav-item"><a className="nav-link" href="index.html">Home</a></li>                  
                  <li className="nav-item"><a className="nav-link" href="portfolio-style1-boxed.html">Portfolio</a>      
                  </li>
                </ul>    
                <div>
                  <ul className="navbar-buttons d-inline-block align-middle">
                    <li className="d-block d-lg-none"><a href="#mobile-menu" data-toggle="offcanvas"><i className="fe-icon-menu"></i></a></li>
                    <li><a href="#" data-toggle="search"><i className="fe-icon-search"></i></a></li>
                  </ul>
                </div>                    
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App
