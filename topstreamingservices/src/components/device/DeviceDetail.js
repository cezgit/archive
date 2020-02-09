import React, {Component} from 'react';

import PricingTiers from '../shared/PricingTiers';
import PricingTier from '../shared/PricingTier';
import ItemDetailLogo from '../shared/ItemDetailLogo';
import Features from '../shared/Features';

class DeviceDetail extends Component {

  render() {

    let prices = [];
    this.props.itemSelected.pricing.forEach( (price) => {
      prices.push(<PricingTier price={price} key={price.id} />);
    });

    let disclaimer = prices.length > 1 ? "All features shown are for the top of the line product offered but may be present in the other devices too." : "";

    let features = "";
    if(this.props.itemSelected.features.length > 0) {
      features = <Features items={this.props.itemSelected.features}
        disclaimer={disclaimer}
        key="features" shade="white-detail" />;
    }

    return (
      <div className="col-sm-4">

        <div className="ibox ">

          <div className="ibox-content">
            <div className="tab-content">
              <div className="tab-pane active">
                <ItemDetailLogo avatarUrl={process.env.PUBLIC_URL + '/img/devices/' + this.props.itemSelected.id + '.jpeg'} />
                <PricingTiers key="price" shade="gray-detail">{prices}</PricingTiers>
                {features}
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default DeviceDetail;
