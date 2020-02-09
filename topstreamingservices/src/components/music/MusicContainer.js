import React, {Component} from 'react';
import Tabs from '../../common/Tabs';
import Pane from '../../common/Pane';

import ItemList from '../shared/ItemList';
import MusicListRow from './MusicListRow';

class MusicContainer extends Component {
  render() {

    let rows = [];
    this.props.services.forEach( (service) => {
      rows.push(<MusicListRow service={service} key={service.id} onClick={this.props.fetchItem}/>);
    });

    return (
      <div className="col-sm-8">
        <div className="ibox">
          <div className="ibox-content">

            {/* <SearchBar /> */}

            <div className="clients-list">
              <span className="pull-right small text-muted">{this.props.itemCount} Entries</span>
              <Tabs selected={0} onClick={this.props.setTab}>
                <Pane label="Paid" fontType="fa fa-money">
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

export default MusicContainer;
