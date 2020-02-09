import React, {Component} from 'react';

import _ from 'lodash';

import TitleHeader from '../components/shared/TitleHeader';
import LexiconContainer from '../components/lexicon/LexiconContainer';
import lexiconData from '../data/lexicon.json';

export default class Lexicon extends Component {

  constructor(props) {
    super(props);
    let data = lexiconData.list;

    this.state = {
      allTerms: this.selectTerms(data),
      terms: this.selectTerms(data),
      itemCount: 0,
      searchValue: null
    }
  }

  componentWillMount() {

    this.setState({
      itemCount: this.state.terms.length
    })
  }

  selectTerms(data) {
    return _.chain(data)
      // .filter(e => e.type === termType)
      .sortBy("name")
      .value();
  }

  searchByName = (val) => {

    let matches = val === "" ? this.selectTerms(this.state.allTerms) :
      _.chain(this.state.allTerms)
      .filter(term => term.name.toLowerCase().includes(val.toLowerCase()))
      .sortBy("name")
      .value();
    this.setState({
      terms: matches,
      itemCount: matches.length,
      searchValue: val === "" ? null : val
    })
  }

  searchByType = (val) => {
    let matches = _.chain(this.state.allTerms)
      .filter(term => term.type === val)
      .sortBy("name")
      .value();
    this.setState({
      terms: matches,
      itemCount: matches.length,
      searchValue: val
    })
  }

  render() {
    return (
      <div className="wrapper wrapper-content animated fadeInRight">

        <TitleHeader title="Lexicon" subtitle="Getting to know the jargon..."/>

        <div className="row">

          <LexiconContainer   terms={this.state.terms}
                              itemCount={this.state.itemCount}
                              searchName={this.searchByName}
                              searchType={this.searchByType}
                              searchValue={this.state.searchValue}
          />

        </div>
        {/* end row */}

      </div>
    )
  }
}

Lexicon.propTypes = {
};
