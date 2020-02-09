import React, {Component} from 'react';

import Tabs from '../../common/Tabs';
import Pane from '../../common/Pane';

import ItemList from '../shared/ItemList';
import DeviceListRow from './DeviceListRow';

class DeviceContainer extends Component {

  render() {

    let rows = [];
    this.props.devices.forEach( (device) => {
      rows.push(<DeviceListRow device={device} key={device.id} onClick={this.props.fetchItem}/>);
    });

    return (
      <div className="col-sm-8">
        <div className="ibox">
          <div className="ibox-content">

            {/* <SearchBar /> */}

            <div className="clients-list">
              <span className="pull-right small text-muted">{this.props.itemCount} Entries</span>
              <Tabs selected={this.props.selectedTab} onClick={this.props.setTab}>
                <Pane label="Set-Top & Sticks" fontType="fa fa-youtube-play">
                  <ItemList>{rows}</ItemList>
                </Pane>
                <Pane label="Consoles & DVRs" fontType="fa fa-gamepad">
                  <ItemList>{rows}</ItemList>
                </Pane>
              </Tabs>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DeviceContainer;
