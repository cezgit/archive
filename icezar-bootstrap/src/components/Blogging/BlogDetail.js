import React, {Component} from 'react';

class BlogDetail extends Component {


  componentWillMount() {

  }

  render () {

      // let imgPath = require(`./images/480x320/${data.img}`);
      let imgPath = require(`./images/480x320/img17.jpg`);

      return (
        <div id="content">

          <div className="container u-space-1-bottom">

            <div className="text-center w-lg-80 mx-auto">
              <h1 className="display-4 font-size-26 font-weight-normal mb-0">Announcing a free plan for small teams</h1>
            </div>

          </div>

          <div className="u-space-1-bottom">
            <a className="text-secondary" href="#">
              <span className="fa fa-arrow-left small mr-2"></span>
              Go Back
            </a>
          </div>

          <div className="container u-space-1">
            <div className="w-lg-60 mx-auto">
              <div className="mb-3">
                <span className="text-muted">April 15, 2018</span>
              </div>

              <div className="mb-4">
                <img className="img-fluid rounded" src={imgPath} alt="Image Description" />
              </div>

              <div className="mb-5">
                <p>At Front, our mission has always been focused on bringing openness and transparency to the design process. We've always believed that by providing a space where designers can share ongoing work not only empowers them to make better products, it also helps them grow. We're proud to be a part of creating a more open culture and to continue building a product that supports this vision.</p>
                <p>As we've grown, we've seen how Front has helped companies such as Spotify, Microsoft, Airbnb, Facebook, and Intercom bring their designers closer together to create amazing things. We have also learned that when the culture of sharing is brought in earlier, the better teams adapt and communicate with one another.</p>
                <p>That is why we are excited to share that we now have a <a href="#">free version of Front</a>, which will allow individual designers, startups and other small teams a chance to create a culture of openness early on.</p>
              </div>

              <h2 className="h5 mb-3">Bringing the culture of sharing to everyone.</h2>

              <p>Small teams and individual designers need a space where they can watch the design process unfold, both for themselves and for the people they work with – no matter if it is a fellow designer, product manager, developer or client. Front allows you to invite more people into the process, creating a central place for conversation around design. As those teams grow, transparency and collaboration becomes integrated in how they communicate and work together.</p>
            </div>
          </div>

          <div className="container u-space-3-bottom">
            <div className="w-lg-60 mx-auto">

              <ul className="list-inline text-center mb-0">
                <li className="list-inline-item pb-3">
                  <a className="u-label u-label--xs u-label--secondary" href="#">Business</a>
                </li>
                <li className="list-inline-item pb-3">
                  <a className="u-label u-label--xs u-label--secondary" href="#">Start-Up</a>
                </li>
                <li className="list-inline-item pb-3">
                  <a className="u-label u-label--xs u-label--secondary" href="#">Plan</a>
                </li>
              </ul>


              <hr className="my-7" />


              <ul className="list-inline text-center mb-0">
                <li className="list-inline-item">
                  <a className="u-bg-transparent u-icon u-icon-secondary--air" href="#">
                    <span className="fa fa-facebook-f u-icon__inner"></span>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="u-bg-transparent u-icon u-icon-secondary--air" href="#">
                    <span className="fa fa-twitter u-icon__inner"></span>
                  </a>
                </li>

              </ul>

              <hr className="my-7" />
            </div>
          </div>

        </div>

        // <div>This is blog with id: {this.props.match.params.id}</div>


        // <div>This is blog with id: {this.props.match.params.id}</div>
      );
  }
}

export default BlogDetail;
