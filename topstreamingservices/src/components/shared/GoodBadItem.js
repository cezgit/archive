import React, {Component} from 'react';

class GoodBadItem extends Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div className="goodbad-item">
          {this.props.item}
      </div>
    );
  }
}

export default GoodBadItem;
