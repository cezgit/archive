import React, {Component} from 'react';
import ItemDetailLogo from '../shared/ItemDetailLogo';
import Devices from '../shared/Devices';
import PricingTiers from '../shared/PricingTiers';
import PricingTier from '../shared/PricingTier';
import Features from '../shared/Features';
import Reviews from '../shared/Reviews';
import Events from '../shared/Events';

import $ from 'jquery/src/jquery';

class VideoServiceDetail extends Component {

  componentDidUpdate(){
    $('html, body').animate({scrollTop:0},'50');
    // window.scrollTo(0,20);
  }

  render() {

    let prices = [];
    this.props.itemSelected.pricing.forEach( (price) => {
      prices.push(<PricingTier price={price} key={price.id} />);
    });

    let disclaimer = prices.length > 1 ? "Not all features listed are guaranteed to be available in every subscription plan. Usually they're included with the plan you have to pay the most for." : "";

    // let pros = "";
    // let cons = "";
    //
    // if(this.props.itemSelected.pros && this.props.itemSelected.pros.length > 0) {
    //   pros = <Reviews items={this.props.itemSelected.pros} reviewType="Pros" key="proReview" shade="gray-detail" />;
    // }
    //
    // if(this.props.itemSelected.cons && this.props.itemSelected.cons.length > 0) {
    //   cons = <Reviews items={this.props.itemSelected.cons} reviewType="Cons" key="conReview" shade="gray-detail" />;
    // }

    // let features = "";
    // if(this.props.itemSelected.features.length > 0) {
    //   features = <Features items={this.props.itemSelected.features}
    //     disclaimer={disclaimer}
    //     key="features" shade="white-detail" />;
    // }

    return (
      <div className="col-sm-4">

        <div className="ibox ">

          <div className="ibox-content">
            <div className="tab-content">
              <div className="tab-pane active">

                <a target="_blank" href={this.props.itemSelected.url}><ItemDetailLogo avatarUrl={process.env.PUBLIC_URL + '/img/services/' + this.props.itemSelected.id + '.jpeg'} /></a>
                <PricingTiers key="price" shade="gray-detail">{prices}</PricingTiers>
                <Devices items={this.props.itemSelected.devices} key="devices" shade="white-detail" />
                <Events items={this.props.itemSelected.news} key="events" shade="gray-detail" />

                {/* {pros}
                {cons}
                {features} */}                

              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }
}

export default VideoServiceDetail;
