import React, {Component} from 'react';
import ItemDetailLogo from '../shared/ItemDetailLogo';
import Devices from '../shared/Devices';
import PricingTiers from '../shared/PricingTiers';
import PricingTier from '../shared/PricingTier';
import Features from '../shared/Features';

import $ from 'jquery/src/jquery';

class SearchResultDetail extends Component {

  render() {

    let logoType = (this.props.itemSelected.type.includes("vod") || this.props.itemSelected.type.includes("mod")) ? "services" : "devices";

    let prices = [];
    if(this.props.itemSelected) {
      this.props.itemSelected.pricing.forEach( (price) => {
        prices.push(<PricingTier price={price} key={price.id} />);
      });
    }

    let disclaimer = prices.length > 1 ? "Not all features listed are guaranteed to be available in every subscription plan. Usually they're included with the plan you have to pay the most for." : "";

    let features = "";
    if(this.props.itemSelected && this.props.itemSelected.features.length > 0) {
      features = <Features items={this.props.itemSelected.features}
        disclaimer={disclaimer}
        key="features" shade="gray-detail" />;
    }

    return (
      <div className="col-sm-4">

        <div className="ibox ">

          <div className="ibox-content">
            <div className="tab-content">
              <div className="tab-pane active">

                <a target="_blank" href={this.props.itemSelected.url}><ItemDetailLogo avatarUrl={process.env.PUBLIC_URL + '/img/' + logoType + '/' + this.props.itemSelected.id + '.jpeg'} /></a>
                <PricingTiers key="price" shade="gray-detail">{prices}</PricingTiers>
                <Devices items={this.props.itemSelected.devices} key="devices" shade="white-detail" />
                {features}
                {/* <div>

                  <div className="detail-title">Latest News</div>
                  <div id="vertical-timeline" className="vertical-container dark-timeline">
                    {news}
                  </div>

                </div> */}

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default SearchResultDetail;
