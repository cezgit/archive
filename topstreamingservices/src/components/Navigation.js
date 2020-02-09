import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import $ from 'jquery/src/jquery';
import metismenu from 'metismenu';

import logo from '../img/logo-1.png';

class Navigation extends Component {

  componentDidMount() {
    const { menu } = this.refs;
    $(menu).metisMenu();
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }

  secondLevelActive(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  }

  render() {
    return (
      <div className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu" ref="menu">
            <li className="nav-header">
              <div className="dropdown profile-element">
                <span></span>

                <span className="clear">
                  <span className="block m-t-xs">
                    <NavLink to="/"><img height="60" width="60" src={logo} alt="logo"/></NavLink>
                  </span>
                  {/* <span className="text-muted text-xs block">Example position<b className="caret"></b></span> */}
                </span>

                {/* <ul className="dropdown-menu animated fadeInRight m-t-xs">
                  <li><a href="#"> Logout</a></li>
                </ul> */}
              </div>
              <div className="logo-element">
                <NavLink to="/"><img height="40" width="40" src={logo} alt="logo"/></NavLink>
              </div>
            </li>
            <li className={this.activeRoute("/video")}>
              <a><i className="fa fa-video-camera fa-2"></i> <span className="nav-label">Video</span><span className="fa arrow"></span></a>
              <ul className={this.secondLevelActive("/video")}>
                  <li className={this.activeRoute("/video/0")}><NavLink to="/video/0">Paid</NavLink></li>
                  <li className={this.activeRoute("/video/1")}><NavLink to="/video/1">Free</NavLink></li>
                  <li className={this.activeRoute("/video/2")}><NavLink to="/video/2">OTT TV</NavLink></li>
              </ul>
            </li>
            <li className={this.activeRoute("/music")}>
              <NavLink to="/music"><i className="fa fa-music fa-2"></i> <span className="nav-label">Music</span></NavLink>
            </li>
            <li className={this.activeRoute("/device")}>
              <a><i className="fa fa-cogs fa-2"></i> <span className="nav-label">Devices</span><span className="fa arrow"></span></a>
              <ul className={this.secondLevelActive("/device")}>
                  <li className={this.activeRoute("/device/0")}><NavLink to="/device/0">Set-Top</NavLink></li>
                  <li className={this.activeRoute("/device/1")}><NavLink to="/device/1">DVRs</NavLink></li>
              </ul>
            </li>
            <li className={this.activeRoute("/lexicon")}>
              <NavLink to="/lexicon"><i className="fa fa-book fa-2"></i> <span className="nav-label">Lexicon</span></NavLink>
            </li>
          </ul>
        </div>
        <ReactTooltip type="info" effect="float" multiline={true}/>
      </div>
    )
  }
}

export default Navigation
