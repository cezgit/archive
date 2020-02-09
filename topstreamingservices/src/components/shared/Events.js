import React, {Component} from 'react';

import _ from 'lodash';
import Event from './Event';

class Events extends Component {

  render() {

    let items = [];
    if(this.props.items){
      let sortedItems = _.sortBy(this.props.items, 'date').reverse();

      sortedItems.forEach( (item) => {
        items.push(<Event item={item} key={item.date} />);
      });
    }

    return (
      <div className={this.props.shade}>
        <div className="detail-title">Latest News</div>
        <div id="vertical-timeline" className="vertical-container dark-timeline">
          {items}
        </div>
      </div>
    );
  }
}

export default Events;
