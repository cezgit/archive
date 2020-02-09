import React, {Component} from 'react';

import TitleHeader from '../components/shared/TitleHeader';
import SearchResultContainer from '../components/search/SearchResultContainer';
import SearchResultDetail from '../components/search/SearchResultDetail';

import _ from 'lodash';

export default class Search extends Component {

  constructor(props) {
    super(props);
    console.log('Search constructor');
  }

  componentWillMount() {
    console.log('Search will mount');
  }

  componentDidMount() {
    console.log('Search did mount');
    // this.initializeSlimScroll();
  }

  render() {

    if(!this.props.results || this.props.results.length === 0) {
      return (
        <div className="wrapper wrapper-content animated fadeInRight">
          <TitleHeader title="Search" subtitle="Search Results"/>
          <div className="col-sm-12">No results found!</div>
        </div>
      )
    }

    return (
      <div className="wrapper wrapper-content animated fadeInRight">

        <TitleHeader title="Search" subtitle="Search Results"/>

        <div className="row">
          <SearchResultContainer results={this.props.results} fetchItem={this.props.fetchItem} />
          <SearchResultDetail itemSelected={this.props.itemSelected} />
        </div>
      </div>
    )
  }
}
