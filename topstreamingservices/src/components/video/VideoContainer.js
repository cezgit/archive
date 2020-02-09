import React, {Component} from 'react';

import Tabs from '../../common/Tabs';
import Pane from '../../common/Pane';

import ItemList from '../shared/ItemList';
import VideoListRow from './VideoListRow';

class VideoContainer extends Component {

  render() {

    let rows = [];
    this.props.services.forEach( (service) => {
      rows.push(<VideoListRow service={service} key={service.id} onClick={this.props.fetchItem}/>);
    });

    return (
      <div className="col-sm-8">
        <div className="ibox">
          <div className="ibox-content">

            {/* <SearchBar /> */}

            <div className="clients-list">
              <span className="pull-right small text-muted">{this.props.itemCount} Entries</span>
              <Tabs selected={this.props.selectedTab} onClick={this.props.setTab}>
                <Pane label="Paid" fontType="fa fa-money">
                  <ItemList>{rows}</ItemList>
                </Pane>
                <Pane label="Free" fontType="fa fa-smile-o">
                  <ItemList>{rows}</ItemList>
                </Pane>
                <Pane label="OTT TV" fontType="fa fa-television">
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

export default VideoContainer;
