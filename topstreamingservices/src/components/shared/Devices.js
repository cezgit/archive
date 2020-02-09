import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

import Badge from '../../common/Badge';

class Devices extends Component {

  render() {

    let devices = [];
    if(this.props.items){
      this.props.items.forEach((dev)=> {
        var classType = 'badge badge-danger';
        if(dev.type === 'set-top') {
          classType = 'badge badge-primary';
        }
        else if(dev.type === 'media-receiver') {
          classType = 'badge badge-info';
        }
        else if(dev.type === 'game-console') {
          classType = 'badge badge-success';
        }
        else if(dev.type === 'platform') {
          classType = 'badge badge-warning';
        }
        else if (dev.type === 'dvr') {
          classType = 'badge badge-warning-light';
        }
        else if(dev.type === 'app') {
          classType = 'badge badge-white';
        }
        else if(dev.type === 'speaker') {
          classType = 'badge badge-warning';
        }
        devices.push(<Badge item={dev} classType={classType} key={dev.id} />);
      });
    }

    return (
      <div className={this.props.shade}>
        <p className="detail-title">Devices</p>
        <ul className="list-group clear-list">
            <li className="list-group-item-fc">
              <div className="list-item-value">{devices}</div>
            </li>
            {/* <li className="list-group-item-fc">
              <div className="list-item-key detail-content"><strong>Counts:</strong></div>
              <div className="list-item-value">
                <Badge item={this.props.item.content.count} class="badge badge-white" />
              </div>
            </li>
            <li className="list-group-item-fc">
              <div className="list-item-key detail-content"><strong>Recent:</strong></div>
              <div className="list-item-value">
                <Badge item={this.props.item.content.recent} class="badge badge-primary" />
              </div>
            </li> */}
        </ul>
        <ReactTooltip type="info" effect="float" multiline={true}/>
      </div>
    );
  }
}

export default Devices;
