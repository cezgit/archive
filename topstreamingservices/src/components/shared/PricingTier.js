import React, {Component} from 'react';
import {FormattedNumber} from 'react-intl';
import ReactTooltip from 'react-tooltip'

class PricingTier extends Component {
  render() {

    let price = (this.props.price.amount > 0) ?
      <FormattedNumber value={this.props.price.amount} style="currency" currency={this.props.price.currency} /> :
      <font color='red'>FREE</font>;

    let period = this.props.price.period ?
      (this.props.price.amount > 0) ?
        "/"+this.props.price.period :
        "" :
      "";

    let limits = "";
    if(this.props.price.limits) {
      limits = " - " + this.props.price.limits;
    }

    return (
        <li className="list-group-item" data-tip={this.props.price.tooltip}>
            <span className="pull-right service-price">
              <strong>{price}</strong><small>{period}</small>
            </span>
            <div className="detail-content"><strong>{this.props.price.id}</strong>{limits}</div>
            <div className="item-detail text-muted" dangerouslySetInnerHTML={{ __html:this.props.price.misc }}></div>
            <ReactTooltip type="info" effect="float" multiline={true}/>
        </li>
    );
  }
}

export default PricingTier;
