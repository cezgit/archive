import React from 'react';

export default class LexiconTerm extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.searchType(e.target.text);
  }

  render() {

    let types = [], rawTypes = this.props.term.type.split(",");
    let counter = 0, rawTypesSize = rawTypes.length;
    rawTypes.forEach(type => {
      types.push(<a className='search-link' key={counter} onClick={this.handleClick}>{type.trim()}</a>)
      if(counter++ < rawTypesSize - 1)
        types.push(" | ");
    });

    return (
      <div>
        <div className="hr-line-dashed"></div>
        <div className="search-result">
            <h3>{this.props.term.name}</h3> [{types}]
            <p dangerouslySetInnerHTML={{ __html:this.props.term.description}} />
        </div>
      </div>
    );
  }
}
