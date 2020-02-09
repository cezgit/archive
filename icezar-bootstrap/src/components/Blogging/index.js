import React, {Component} from 'react'

import Blog from './Blog'
import queryString from 'query-string'
// import blogData from './data/blogs.json'

class BlogCategory extends Component {

  render() {

    let catMap = new Map([
      ['java', "Java Blogs"],
      ['scala', "Scala Findings"]
    ]);
    let catId = this.props.match.params.catId || 'java';
    let categoryName = catMap.get(catId);


    let blogs = [];
    this.props.blogs.forEach( blog => {
      blogs.push(<Blog key={blog.title} data={blog}/>);
    });

    return (
      <div id="classic-news-blog" className="mb-9">
        <div className="w-md-80 w-lg-60 mb-9">
          <h2 className="h4">{categoryName} <a className="anchorjs-link" href="#classic-news-blog" aria-label="Anchor" data-anchorjs-icon="#"></a></h2>
          {/* <h1 class="font-weight-normal">{this.props.blogCategory}</h1> */}
        </div>
        <div className="row">
          <div className="col-lg-9 mb-9 mb-lg-0">
            {blogs}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogCategory;
