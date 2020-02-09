import React from 'react';

import logoShortWhite from "./logo-short-white.svg";

const logoStyle = {width: "40px", "maxWidth": "100%"}

const Footer = (props) => {
  return (
    <footer className="bg-dark">
      <div className="container space-2">
        <div className="row justify-content-md-between">
          <div className="col-6 col-md-3 col-lg-2 order-lg-3 mb-7 mb-lg-0">
            <h3 className="h6 text-white mb-3">About</h3>

            {/* List Group */}
            <div className="list-group list-group-flush list-group-transparent">
              <a className="list-group-item list-group-item-action" href="../pages/about-agency.html">About</a>
            </div>
            {/* End List Group */}
          </div>
          
          <div className="col-6 col-md-3 col-lg-2 order-lg-6 mb-7 mb-lg-0">
            <h3 className="h6 text-white mb-3">Social</h3>
            <div className="list-group list-group-flush list-group-transparent">
              <a className="list-group-item list-group-item-action" href="#">
                <span className="fab fa-facebook-f min-width-3 text-center mr-2"></span>
                Facebook
                </a>
              <a className="list-group-item list-group-item-action" href="#">
                <span className="fab fa-twitter min-width-3 text-center mr-2"></span>
                Twitter
                </a>
              <a className="list-group-item list-group-item-action" href="#">
                <span className="fab fa-dribbble min-width-3 text-center mr-2"></span>
                Dribbble
                </a>
              <a className="list-group-item list-group-item-action" href="#">
                <span className="fab fa-github min-width-3 text-center mr-2"></span>
                GitHub
                </a>
            </div>
          </div>

          <div className="col-lg-4 order-lg-1 d-flex align-items-start flex-column">
            {/* Logo */}
            <a className="d-inline-block mb-5" href="index.html" aria-label="Space">
              <img src={logoShortWhite} alt="Logo" style={logoStyle} />
            </a>
            {/* End Logo */}
            <p className="small text-muted">All rights reserved. &copy; Space. 2018 Htmlstream.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
