import React, { Component } from 'react';
// import slimScroll from '../../public/vendor/slimScroll/jquery.slimscroll';
import { getInt } from '../common/Helpers'
import TitleHeader from '../components/shared/TitleHeader';
import VideoServiceDetail from '../components/video/VideoServiceDetail';
import VideoContainer from '../components/video/VideoContainer';

import _ from 'lodash';

class Video extends Component {

  constructor(props) {
    super(props);

    console.log('Video constructor');

    this.state = {
      selectedServices: this.selectServices(getInt(this.props.match.params.tab), props.services),
      itemCount: 0,
      itemSelected: null
    };
  }

  componentWillMount() {
    console.log('Video will mount');
    this.setState({
      itemCount: this.state.selectedServices.length,
      itemSelected: this.state.selectedServices[0]
    });
  }

  componentDidMount() {
    console.log('Video did mount');
    // this.initializeSlimScroll();
  }

  componentWillUnmount() {
    console.log('Video will unmount');
    // nothing happens here
  }

  setTab = (index) => {
    let selectedServices = this.selectServices(index, this.props.services);
    this.setState({
      selectedServices: selectedServices,
      itemCount: selectedServices.length,
      itemSelected: selectedServices[0]
    });
    // force side nav rerendering for the clicked tab
    this.props.updateSideNav("/video/"+index);
  }

  fetchItem = (itemId) => {
    this.setState({
      itemSelected: _.find(this.state.selectedServices, {'id': itemId})
    })
  }

  selectServices(index, services) {
    let serviceType = index === 0 ? 'vod-sub' : index === 1 ? 'vod-free' : 'vod-tv';
    return _.chain(services)
      .filter(e => e.type === serviceType)
      .sortBy("sid")
      .value();
  }

  render() {
    console.log('Video render');
    return (
      <div className="wrapper wrapper-content animated fadeInRight">

        <TitleHeader title="Top Streaming Video Services" subtitle="Click on a service to view info associated with it."/>

        <div className="row">

          <VideoContainer   itemCount={this.state.itemCount}
                            services={this.state.selectedServices}
                            setTab={this.setTab}
                            fetchItem={this.fetchItem}
                            selectedTab={getInt(this.props.match.params.tab)}
          />

          <VideoServiceDetail itemSelected={this.state.itemSelected} />

        </div>
        {/* end row */}

      </div>
    )
  }

  // initializeSlimScroll() {
  //   $('.sidebar-container').slimScroll({
  //     height: '100%',
  //     railOpacity: 0.4,
  //     wheelStep: 10
  //   });
  //   // Add slimscroll to element
  //   $('.full-height-scroll').slimscroll({
  //       height: '100%'
  //   });
  // }
}

export default Video
