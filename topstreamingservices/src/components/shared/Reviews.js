import React, {Component} from 'react';

import Review from './Review';

class Reviews extends Component {
  render() {

    let reviews = [];
    if(this.props.items){
      this.props.items.forEach( (item) => {
        reviews.push(<Review item={item} key={item.name} reviewType={this.props.reviewType}/>);
      });
    }

    return (
      <div className={this.props.shade}>
        <p className="detail-title">{this.props.reviewType}</p>
        <ul className="list-group agile-list">
          {reviews}
        </ul>
      </div>
    );
  }
}

export default Reviews;
