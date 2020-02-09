import React, {Component} from 'react';
import SearchResultRow from './SearchResultRow';

class SearchResultContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    let rows = [];
    if(this.props.results) {
      this.props.results.forEach( (result) => {
        rows.push(<SearchResultRow result={result} key={result.id} onClick={this.props.fetchItem} />);
      });
    }

    return (
      <div className="col-sm-8">
        <div className="ibox">
          <div className="ibox-content">
            {rows}
            <span className="clear"></span>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchResultContainer;
