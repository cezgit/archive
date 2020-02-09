import React, { Component } from 'react';

import { getInt } from '../common/Helpers'
import TitleHeader from '../components/shared/TitleHeader';
import DeviceContainer from '../components/device/DeviceContainer';
import DeviceDetail from '../components/device/DeviceDetail';

import _ from 'lodash';

class Device extends Component {

  constructor(props) {
    super(props);
    let devices = this.props.devices;

    this.state = {
      devices: devices,
      selectedDevices: this.selectDevices(getInt(this.props.match.params.tab), devices),
      itemCount: 0,
      itemSelected: null
    };
  }

  componentWillMount() {

    this.setState({
      itemCount: this.state.selectedDevices.length,
      itemSelected: this.state.selectedDevices[0]
    })
  }

  setTab = (index) => {
    let selectedDevices = this.selectDevices(index, this.state.devices);
    this.setState({
      selectedDevices: selectedDevices,
      itemCount: selectedDevices.length,
      itemSelected: selectedDevices[0]
    });
    // force side nav rerendering for the clicked tab
    this.props.updateSideNav("/device/"+index);
  }

  fetchItem = (itemId) => {
    this.setState({
      itemSelected: _.find(this.state.selectedDevices, {'id': itemId})
    })
  }

  selectDevices(index, devices) {
    let deviceTypes = index === 0 ? ['set-top','media-receiver'] : ['dvr','game-console'];
    return _.chain(devices)
    .filter(e => deviceTypes.includes(e.type))
    .sortBy("sid")
    .value();
  }

  render() {
    return (

      <div className="wrapper wrapper-content animated fadeInRight">

        <TitleHeader title="Streaming Devices" subtitle="Most popular streaming devices."/>

        <div className="row">

          <DeviceContainer  itemCount={this.state.itemCount}
            devices={this.state.selectedDevices}
            setTab={this.setTab}
            fetchItem={this.fetchItem}
            selectedTab={getInt(this.props.match.params.tab)}
          />

          <DeviceDetail itemSelected={this.state.itemSelected} />

        </div>
      </div>
    )
  }

}

export default Device
