import React, {Component} from 'react'

import { Link } from 'react-router-dom'

class SideNav extends Component {

  render() {
    return (

      <div className="col-12 col-md-3 col-xl-2 fd-sidebar">

        {/* <!-- Sidebar Search --> */}
        <form className="fd-search d-flex align-items-center">
          <input id="fd-sidebar-navigation__search-autocomplete" className="form-control form-control-sm icust-form-control-sm" type="text" placeholder="Search..." data-url="" />

          {/* <!-- Responsive Toggle Button --> */}
          <button className="btn btn-link fd-search-docs-toggle d-md-none p-0 ml-3" type="button"
                  data-toggle="collapse"
                  data-target="#navside-accordion"
                  aria-controls="navside-accordion"
                  aria-expanded="false"
                  aria-label="Toggle docs navigation">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false">
              <title>Menu</title>
              <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M4 7h22M4 15h22M4 23h22"/>
            </svg>
          </button>
          {/* <!-- End Responsive Toggle Button --> */}
        </form>
        {/* <!-- End Sidebar Search --> */}

        {/* <!-- Sidebar Nav --> */}
        <nav id="navside-accordion" className="fd-navside collapse">
          <ul id="components" className="fd-navside__links collapse show" data-parent="#navside-accordion">
            <li><Link to='/blogs/java'>Java</Link></li>
            <li><Link to='/blogs/scala'>Scala</Link></li>            
          </ul>
        </nav>

      </div>
    );
  }
}

export default SideNav;
