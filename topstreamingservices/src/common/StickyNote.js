import React from 'react';

export default class StickyNote extends React.Component {

  render() {
    return (
      <li>
        <div>
          <small>{this.props.date}</small>
          <h4>{this.props.title}</h4>
          <p>{this.props.description}</p>
          <a><i className="fa fa-thumb-tack"></i></a>
        </div>
      </li>
    );
  }
}
