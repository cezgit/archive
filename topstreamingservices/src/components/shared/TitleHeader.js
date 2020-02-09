import React, {Component} from 'react';

class TitleHeader extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="text-center some-space">
            <h2>
              {this.props.title}
            </h2>
            <h5>
              {this.props.subtitle}
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default TitleHeader;
