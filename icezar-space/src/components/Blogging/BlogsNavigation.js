import React, { Component } from 'react'

class BlogsNavigation extends Component {


  render() {
    return (
      <div className="col-lg-3">
        <form className="js-focus-state input-group input-group-sm form form--sm mb-7">
          <input
            type="text"
            className="form-control form__input"
            name="search"
            placeholder="Search Blogs"
            aria-label="Search Blogs"
          />
          <span className="input-group-append form__append">
            <button type="submit" className="btn btn-primary">
              Go
            </button>
          </span>
        </form>

        <div className="mb-7">
          <h3 className="h5 mb-3">Recent posts</h3>

          <div className="border rounded p-4">
            <ul className="list-unstyled">
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Remote workers, here's how to dodge distractions
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Create your adventure
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  How to change careers or start a home-based business?
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Classic design principles
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-7">
          <h3 className="h5 mb-3">Categories</h3>

          <div className="border rounded p-4">
            <ul className="list-unstyled">
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Design
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Art
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  Graphic
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  WordPress
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  HTML/CSS
                </a>
              </li>
              <li className="dropdown-divider" />
              <li className="py-1">
                <a className="text-secondary" href="#">
                  SASS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default BlogsNavigation
