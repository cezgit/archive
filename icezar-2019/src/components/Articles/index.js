import React from 'react'

import ArticleLayout from './ArticleLayout'
import ArticleNav from './ArticleNav'

const Articles = (props) => {

    return (
      <ArticleLayout>
        <div className="col-md-9">

          <div className="row">
            <div className="col-md-6">
              {props.blogs.leftBlogs}
            </div>
            <div className="col-md-6">
              {props.blogs.rightBlogs}
            </div>
          </div>

        </div>
        <ArticleNav {...props} />
      </ArticleLayout>
    );
}
    
export default Articles