import React, { Component } from 'react'

import { Link } from 'react-router-dom'

class BlogBriefHeader extends Component {
  render() {
    let data = this.props.data;

    return (
      <h2 className="h5 mb-3">
        <a href="single-article-classic.html">
          <Link to={`/blog/${data.id}`}>
            <h4 className="card-title">{data.title}</h4>
          </Link>
        </a>
      </h2>
    )
  }
}

export default BlogBriefHeader
