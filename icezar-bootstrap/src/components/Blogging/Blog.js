import React, {Component} from 'react';
import { Link } from 'react-router-dom'

import moment from 'moment'

class Blog extends Component {
  render() {

    let data = this.props.data;
    let imgPath = require(`./images/480x320/${data.img}`);
    let content = {__html: data.content};

    return (
      <article className="row mb-7">
        <div className="col-sm-5 mb-5 mb-lg-0">
          {/* <!-- Image --> */}
          <img className="img-fluid w-100 rounded" src={imgPath} alt={data.imgDesc} />
          {/* <!-- End Image --> */}
        </div>

        <div className="col-lg-7">
          {/* <!-- Info --> */}
          <div className="pt-1 pr-4">
            <small className="d-block text-muted mb-3">{moment(data.date).format('ll')}</small>
            <div className="mb-7">
              <h2 className="h5">
                <Link to={`/blog/${data.id}`}>{data.title}</Link>
              </h2>
              <p dangerouslySetInnerHTML={content} />
            </div>
            <small className="d-block text-secondary">Tags: <a className="text-dark font-weight-bold" href="">{data.tags}</a></small>
          </div>
          {/* <!-- End Info --> */}
        </div>
      </article>
    );
  }
}

export default Blog;
