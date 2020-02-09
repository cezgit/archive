import React from 'react';
import { NavLink } from 'react-router-dom';
import { smoothlyMenu } from '../common/Helpers.js';
import $ from 'jquery/src/jquery';

class TopHeader extends React.Component {

    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleNavigation(e) {
        e.preventDefault();
        $("body").toggleClass("mini-navbar");
        smoothlyMenu();
    }

    activeRoute(routeName) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? "topLinksActive" : "";
    }

    handleSubmit(e) {
      if (e.key === 'Enter') {
        this.props.search(document.getElementById("top-search").value);
      }
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="navbar navbar-static-top white-bg" role="navigation" style={{marginBottom: 0}}>
                    <div className="navbar-header">
                        <a className="navbar-minimalize minimalize-styl-2 right-margin-15 btn btn-primary"
                          onClick={this.toggleNavigation}><i className="fa fa-bars"></i></a>
                        <div className="navbar-form-custom navbar-form-custom-override">
                            <div className="form-group">
                                <input type="text" placeholder="Search for a streaming service or a device..."
                                  onKeyPress={this.handleSubmit}
                                  className="form-control form-control-override" name="q" id="top-search" />
                            </div>
                        </div>
                    </div>
                    <ul className="nav navbar-top-links navbar-right">

                      <li className={this.activeRoute("/about")}>
                        <NavLink to="/about"><span className="text-muted">About</span></NavLink>
                      </li>
                      <li className={this.activeRoute("/contact")}>
                        <NavLink to="/contact"><span className="text-muted">Contact</span></NavLink>
                      </li>
                      <li className={this.activeRoute("/terms")}>
                        <NavLink to="/terms"><span className="text-muted">Terms</span></NavLink>
                      </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default TopHeader;
