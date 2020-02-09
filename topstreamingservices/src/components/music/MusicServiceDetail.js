import React, {Component} from 'react';

import ItemDetailLogo from '../shared/ItemDetailLogo';
import Devices from '../../components/shared/Devices';
import PricingTiers from '../shared/PricingTiers';
import PricingTier from '../shared/PricingTier';
import Features from '../shared/Features';

import $ from 'jquery/src/jquery';

class MusicServiceDetail extends Component {

  getImageUri = () => {
    return "img/services/" + this.props.itemSelected.id +".jpeg";
  }

  componentDidUpdate(){
    $('html, body').animate({scrollTop:0},'50');
    // window.scrollTo(0,20);
  }

  render() {

    let prices = [];
    this.props.itemSelected.pricing.forEach( (price) => {
      prices.push(<PricingTier price={price} key={price.id} />);
    });

    let disclaimer = prices.length > 1 ? "All features shown are offered with the top of the line subscription plan but may be present in the other price tiers too." : "";

    let features = "";
    if(this.props.itemSelected.features.length > 0) {
      features = <Features items={this.props.itemSelected.features}
        disclaimer={disclaimer}
        key="features" shade="gray-detail" />;
    }

    // let news = [];
    // if(this.props.itemSelected.news){
    //   this.props.itemSelected.news.forEach( (item) => {
    //     news.push(<Event item={item} key={item.date} />);
    //   });
    // }

    return (
      <div className="col-sm-4">

        <div className="ibox ">

          <div className="ibox-content">
            <div className="tab-content">
              <div className="tab-pane active">

                <a target="_blank" href={this.props.itemSelected.url}><ItemDetailLogo avatarUrl={this.getImageUri()} /></a>
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

export default MusicServiceDetail;
