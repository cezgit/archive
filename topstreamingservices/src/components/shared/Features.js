import React, {Component} from 'react';

import _ from 'lodash';
import Feature from './Feature';

class Features extends Component {

  render() {

    let items = [];
    if(this.props.items){
      let sortedItems = _.sortBy(this.props.items, 'name');

      sortedItems.forEach( (item) => {
        items.push(<Feature item={item} key={item.name} />);
      });
    }

    return (
      <div className={this.props.shade}>
        <p className="detail-title">Features</p>
        <div className="item-detail text-muted disclaimer">{this.props.disclaimer}</div>
        <ul className="list-group agile-list">
          {items}
        </ul>
      </div>
    );
  }
}

export default Features;
