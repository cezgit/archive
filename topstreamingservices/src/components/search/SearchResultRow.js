import React, {Component} from 'react';

class SearchResultRow extends Component {

  handleClick = () => {
    this.props.onClick(this.props.result.id);
  };

  render() {

    let logoType = (this.props.result.type.includes("vod") || this.props.result.type.includes("mod")) ? "services" : "devices";

    return (
      <tr onClick={this.handleClick}>
        <td className="service-avatar">
          <span><img alt="service logo" src={process.env.PUBLIC_URL + '/img/' + logoType + '/' + this.props.result.id + '.jpeg'} /></span><br/>
        </td>
        <td className="results-row">
          <div className="flex-container-list-row">
            <div className="flex-item-list-row-item service-name">{this.props.result.name}</div>
            <div className="flex-item-list-row-item device-description" dangerouslySetInnerHTML={{ __html:this.props.result.description }}></div>
            {/* <div className="flex-item-list-row-item">{contentTypes}</div> */}
          </div>
        </td>
      </tr>
    );
  }
}

export default SearchResultRow;
