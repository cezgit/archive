import React, {Component} from 'react';

class MusicListRow extends Component {

  handleClick = () => {
    this.props.onClick(this.props.service.id);
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

    let promo = this.props.service.trial ? <span> Try it now - <a target='_blank' href={this.props.service.url}>{this.props.service.trial}</a></span> : "";

    return (
      <tr onClick={this.handleClick}>
        <td className="service-avatar">
          <span><img alt="service logo" src={process.env.PUBLIC_URL + '/img/services/' + this.props.service.id + '.jpeg'} /></span><br/>
        </td>
        <td>
          <div className="flex-container-list-row">
            <div className="flex-item-list-row-item service-name">{this.props.service.name}</div>
            <div className="flex-item-list-row-item device-description">
              <span dangerouslySetInnerHTML={{ __html:this.props.service.description }}></span>
              {promo}
            </div>
            {/* <div className="flex-item-list-row-item">{contentTypes}</div> */}
          </div>
        </td>
      </tr>
    );
  }
}

export default MusicListRow;
