import React, {Component} from 'react';

import logo from './logo.png'

class Header extends Component {

  render() {
    return (
      <header id="header" className="u-header u-header--sticky-top">
        <div className="u-header__section u-gradient-half-primary-v1 u-header--white-nav-links">
          <div className="container-fluid">
            <nav className="js-mega-menu navbar navbar-expand-md u-header__navbar">
              <a className="navbar-brand u-header__navbar-brand u-header__navbar-brand-top-space" href="index.html" aria-label="Front">
                <img src={logo} alt="Logo" width="112" height="43"/>
              </a>

              {/* <!-- Responsive Toggle Button --> */}
              <button type="button" className="navbar-toggler btn fd-header-toggle"
                      aria-label="Toggle navigation"
                      aria-expanded="false"
                      aria-controls="navBar"
                      data-toggle="collapse"
                      data-target="#navBar">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
                  <title>Menu</title>
                  <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"/>
                </svg>
              </button>
              {/* <!-- End Responsive Toggle Button --> */}

              {/* <!-- Navigation --> */}
              <div id="navBar" className="collapse navbar-collapse py-0">
                <ul className="navbar-nav navbar-expand-md w-100 u-header__navbar-nav">

                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href=""> About</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href=""> Blogging</a>
                  </li>
                  <li className="nav-item u-header__nav-item">
                    <a className="nav-link u-header__nav-link" href=""> Contact</a>
                  </li>

                  {/* <!-- Social Icons --> */}
                  <li className="ml-md-auto ml-lg-auto">
                    <ul className="list-inline mb-5 mb-md-0 pt-3 pt-md-0">
                      <li className="list-inline-item mx-0">
                        <a className="u-bg-transparent u-icon u-icon-light--air" href="" target="_blank">
                          <span className="fa fa-facebook u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item mx-0">
                        <a className="u-bg-transparent u-icon u-icon-light--air" href="" target="_blank">
                          <span className="fa fa-twitter u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item mx-0">
                        <a className="u-bg-transparent u-icon u-icon-light--air" href="" target="_blank">
                          <span className="fa fa-github u-icon__inner"></span>
                        </a>
                      </li>
                      <li className="list-inline-item mx-0">
                        <a className="u-bg-transparent u-icon u-icon-light--air" href="" target="_blank">
                          <span className="fa fa-dribbble u-icon__inner"></span>
                        </a>
                      </li>
                    </ul>
                  </li>
                  {/* <!-- End Social Icons --> */}
                </ul>
              </div>
              {/* <!-- End Navigation --> */}

            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
