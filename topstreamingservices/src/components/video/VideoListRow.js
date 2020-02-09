import React, {Component} from 'react';

import swal from 'sweetalert2';

import Badge from '../../common/Badge';
import GoodBad from '../shared/GoodBad';

class VideoListRow extends Component {

  constructor(props) {
    super(props);

    // val pricing =

  }

  handlePriceClick = () => {
    //this.props.onClick(this.props.service.id);
    swal({
      title: 'Custom width, padding, background.',
      width: 600,
      padding: 100,
      background: '#fff url(//bit.ly/1Nqn9HU)'
    })
  };

  render() {

    let contentTypes = [];
    if(this.props.service.content){
      this.props.service.content.split(",").forEach((ct)=> {
        let item = {};
        item.name = ct.trim();
        contentTypes.push(<Badge item={item} classType="badge" key={item.name} />);
      });
    }

    return (
      <tr>
        <td className="service-avatar">
          <span><img alt="service logo" src={process.env.PUBLIC_URL + '/img/services/' + this.props.service.id + '.jpeg'} /></span><br/>
        </td>
        <td>
          <div className="flex-container-list-row">
            <div className="flex-item-list-row-item service-name">{this.props.service.name}</div>
            <div className="flex-item-list-row-item device-description">
                  <GoodBad service={this.props.service} />
            </div>
            {/* <div className="flex-item-list-row-item device-description" dangerouslySetInnerHTML={{ __html:this.props.service.description }}></div> */}
            <div className="flex-item-list-row-item">
              <div className="flex-container-list-column">
                {/* <div className="flex-item-list-column-item">{contentTypes}</div> */}
                <div className="flex-item-list-column-item">
                  <a onClick={this.handlePriceClick} className="text-muted service-link"><i className="fa fa-money"></i> Pricing</a>
                  |
                  <a href="#" className="text-muted service-link"><i className="fa fa-newspaper-o"></i> Content</a>
                  |
                  <a href="#" className="text-muted service-link"><i className="fa fa-newspaper-o"></i> Devices</a>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }
}

export default VideoListRow;
