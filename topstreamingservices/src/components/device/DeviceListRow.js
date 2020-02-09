import React, {Component} from 'react';

class DeviceListRow extends Component {

  handleClick = () => {
    this.props.onClick(this.props.device.id);
  };

  render() {

    // let contentTypes = [];
    // if(this.props.service.content){
    //   this.props.service.content.type.split(",").forEach((ct)=> {
    //     let item = {};
    //     item.name = ct.trim();
    //     contentTypes.push(<Badge item={item} classType="badge" key={item.name} />);
    //   });
    // }

    return (
      <tr onClick={this.handleClick}>
        <td className="service-avatar">
          <span><img alt="device logo" src={process.env.PUBLIC_URL + '/img/devices/' + this.props.device.id + '.jpeg'} /></span><br/>
        </td>
        <td>
          <div className="flex-container-list-row">
            <div className="flex-item-list-row-item service-name">{this.props.device.name}</div>
            <div className="flex-item-list-row-item device-description" dangerouslySetInnerHTML={{ __html:this.props.device.description }}></div>
            {/* <div className="flex-item-list-row-item">{contentTypes}</div> */}
          </div>
        </td>
      </tr>
    );
  }
}

export default DeviceListRow;
