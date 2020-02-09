import React, { Component } from 'react'

import BlogBriefHeader from './BlogBriefHeader'
import BlogImage from './BlogImage'

class BlogBrief extends Component {
  render() {
    let data = this.props.data;
    let briefContent = data.content
      .split(" ")
      .slice(0, 10)
      .join(" ") + "..."     

    let content = { __html: briefContent };

    let imgTag = data.img ? (
      <BlogImage
        imgPath={require(`./images/${data.img}`)}
        imgDesc={data.imgDesc}
      />
    ) : (
      ""
    )

    return <article className="card border-0 mb-5">
        <div className="card-body row align-items-stretch no-gutters p-0">
          <div className="col-7 border border-right-0 rounded-left">
            <div className="p-5">
              <BlogBriefHeader data={data} />
              <p className="mb-0" dangerouslySetInnerHTML={content}/>
            </div>
          </div>
          {imgTag}
        </div>
      </article>

      // <article className="card mb-4">
      // <ArticleHeader data={data} />
      // {imgTag}
      // <div className="card-body">
      // <p className="card-text" dangerouslySetInnerHTML={content} />
      // </div>
      // </article>
  }
}

export default BlogBrief
