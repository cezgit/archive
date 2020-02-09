import React, { Component } from 'react'

import logoWhite from "./logo-white.svg"

const minWidthStyle220 = { "minWidth": "220px" }
class Header extends Component {

  render() {
    return (
      <header id="header" className="u-header u-header--sticky-top-lg">
        <div className="u-header__section bg-dark">
          <div id="logoAndNav" className="container-fluid">

            <nav className="js-mega-menu navbar navbar-expand-lg u-header__navbar">
              <a className="navbar-brand u-header__navbar-brand py-3" href="index.html" aria-label="Space">
                <img src={logoWhite} alt="Logo" />
              </a>

              <button type="button" className="navbar-toggler btn fd-header-toggle"
                aria-label="Toggle navigation"
                aria-expanded="false"
                aria-controls="navBar"
                data-toggle="collapse"
                data-target="#navBar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                  <title>Menu</title>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22" />
                </svg>
              </button>



              <div id="navBar" className="collapse navbar-collapse py-0">
                <ul className="navbar-nav navbar-expand-md w-100 u-header__navbar-nav">

                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link text-light-70" href="../html/home/index.html">Live Preview</a>
                  </li>

                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link text-light-70" href="../starter/index.html">Starter</a>
                  </li>


                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link text-light-70" href="https://htmlstream.com/contact-us">Contact Us</a>
                  </li>

                  <li className="nav-item hs-has-mega-menu d-none d-lg-inline-block u-header__nav-item position-relative ml-lg-auto"
                    data-event="hover"
                    data-animation-in="slideInUp"
                    data-animation-out="fadeOut"
                    data-position="left">                
                  </li>

                  <li className="ml-md-auto ml-lg-0">
                    <ul className="list-inline mb-0">
                      <li className="list-inline-item">
                        <a className="u-icon u-icon--sm u-icon--light" href="https://www.facebook.com/htmlstream" target="_blank">
                          <span className="fab fa-facebook-f u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="u-icon u-icon--sm u-icon--light" href="https://twitter.com/htmlstream" target="_blank">
                          <span className="fab fa-twitter u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="u-icon u-icon--sm u-icon--light" href="https://github.com/htmlstreamofficial" target="_blank">
                          <span className="fab fa-github u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="u-icon u-icon--sm u-icon--light" href="https://dribbble.com/htmlstream" target="_blank">
                          <span className="fab fa-dribbble u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a className="u-icon u-icon--sm u-icon--light" href="https://www.instagram.com/htmlstream/" target="_blank">
                          <span className="fab fa-instagram u-icon__inner"></span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <li className="nav-item pl-md-3">
                    <a className="btn btn-sm btn-primary" href="https://themes.getbootstrap.com/product/space-multipurpose-responsive-template/" target="_blank">
                      Buy Now
                    </a>
                  </li> */}
                </ul>
              </div>
            </nav>

          </div>
        </div>
      </header>
    )
  }
}

export default Header;
