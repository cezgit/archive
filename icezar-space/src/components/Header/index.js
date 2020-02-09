import React, { Component } from 'react'

import logo from './logo.svg'
import logoShort from './logo-short.svg'

const homeSubmenuStyle = { "minWidth": "220px" }
class Header extends Component {

  render() {
    return <header id="header" className="u-header u-header--modern u-header--bordered u-header--sticky-top-lg">
        <div className="u-header__section">
          <div id="logoAndNav" className="container-fluid">

            
            <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
            
              <div className="u-header__navbar-brand-wrapper">
                <a className="navbar-brand u-header__navbar-brand" href="../home/index.html" aria-label="Space">
                  <img className="u-header__navbar-brand-default" src={logo} alt="Logo" />
                  <img className="u-header__navbar-brand-mobile" src={logoShort} alt="Logo" />
                </a>
              </div>
              
              <button type="button" className="navbar-toggler btn u-hamburger u-header__hamburger" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
                <span className="d-none d-sm-inline-block">Menu</span>
                <span id="hamburgerTrigger" className="u-hamburger__box ml-3">
                  <span className="u-hamburger__inner" />
                </span>
              </button>
              
              <div id="navBar" className="collapse navbar-collapse u-header__navbar-collapse py-0">
                <ul className="navbar-nav u-header__navbar-nav">
                  {/* Home */}
                  <li className="nav-item hs-has-sub-menu u-header__nav-item" data-event="hover" data-animation-in="fadeInUp" data-animation-out="fadeOut">
                    <a id="homeMegaMenu" className="nav-link u-header__nav-link" href="javascript:;" aria-haspopup="true" aria-expanded="false" aria-labelledby="homeSubMenu">
                      About
                      {/* <span className="fa fa-angle-down u-header__nav-link-icon" /> */}
                    <span className="u-header__nav-link-icon" />
                    </a>                    
                  </li>                  
                </ul>
              </div>     

            </nav>            

          </div>
        </div>
      </header>;
  }

}

export default Header;
