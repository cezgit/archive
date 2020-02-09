import React, { Component } from 'react';
import TitleHeader from '../components/shared/TitleHeader';

import MusicContainer from '../components/music/MusicContainer';
import MusicServiceDetail from '../components/music/MusicServiceDetail';

import _ from 'lodash';

class Music extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selectedMusicServices: this.selectServices(0, props.services),
      itemCount: 0,
      itemSelected: null
    };
  }

  componentWillMount() {

    this.setState({
      itemCount: this.state.selectedMusicServices.length,
      itemSelected: this.state.selectedMusicServices[0]
    })
  }

  fetchItem = (itemId) => {
    this.setState({
      itemSelected: _.find(this.props.services, {'id': itemId})
    })
  }

  setTab = (index) => {
    let selectedServices = this.selectServices(index, this.state.services);
    this.setState({
      selectedMusicServices: selectedServices,
      itemCount: selectedServices.length,
      itemSelected: selectedServices[0]
    });
  }

  selectServices(index, services) {
    let serviceType = 'mod-sub';
    return _.chain(services)
      .filter(e => e.type === serviceType)
      .sortBy("sid")
      .value();
  }

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">

        <TitleHeader title="Top Streaming Music Services" subtitle="Most popular streaming music services."/>

        <div className="row">

          <MusicContainer itemCount={this.state.itemCount}
                          services={this.state.selectedMusicServices}
                          setTab={this.setTab}
                          fetchItem={this.fetchItem}
          />

          <MusicServiceDetail itemSelected={this.state.itemSelected} />

        </div>

      </div>
    )
  }

}

export default Music
