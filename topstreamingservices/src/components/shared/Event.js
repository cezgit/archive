import React, {Component} from 'react';

class Event extends Component {
  render() {
    return (
      <div className="vertical-timeline-block">
        <div className="vertical-timeline-icon gray-bg">
          <i className={this.props.item.icon}></i>
        </div>
        <div className="vertical-timeline-content">
          <p className="detail-header">{this.props.item.title}</p>
          <p className="detail-content" dangerouslySetInnerHTML={{ __html:this.props.item.article }}/>
          <span className="vertical-date small text-muted news-item-date"> {this.props.item.date} </span>
        </div>
      </div>
    );
  }
}

export default Event;
