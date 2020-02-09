import React, {Component} from 'react';

class PricingTiers extends Component {
  render() {

    return (
      <div className={this.props.shade}>
        <p className="detail-title">Pricing</p>
        <ul className="list-group clear-list">
            {this.props.children}
        </ul>
      </div>
    );
  }
}

export default PricingTiers;
