import React, {Component} from 'react';

class Pane extends Component {

  displayName: 'Pane'

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default Pane;
