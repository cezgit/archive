import React, {Component} from 'react';

class ItemList extends Component {

  render() {

    return (
      <div className="full-height-scroll">
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <tbody>
            {this.props.children}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ItemList;
