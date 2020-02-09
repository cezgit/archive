import React, { Component } from "react";

class BlogHeader extends Component {
  render() {
    return (
      <div className="d-flex align-items-end height-600 position-relative z-index-2">
        <div className="container">
          <div className="w-lg-60 text-center mx-lg-auto mb-9">
            <div className="mb-7">
              <h1 className="display-4 font-size-48--md-down text-white mb-4">
                How guilty should I feel?
              </h1>
              <p className="lead text-white">
                The people who sing odes to my profession's nobility are usually
                not journalists themselves.
              </p>
            </div>

            <img
              className="u-avatar rounded-circle mb-3"
              src="../../assets/img/100x100/img1.jpg"
              alt="Image Description"
            />
            <h2 className="h6 text-white">Maria Muszynska</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogHeader;
