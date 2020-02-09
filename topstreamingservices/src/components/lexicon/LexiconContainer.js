import React, {Component} from 'react';

import LexiconTerm from './LexiconTerm';

class LexiconContainer extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    let searchInput = document.getElementById("search");
    let searchValue = searchInput.value;
    searchInput.value = "";
    this.props.searchName(searchValue);
  }

  render() {

    let rows = [];
    this.props.terms.forEach( (term) => {
      rows.push(<LexiconTerm term={term} key={term.name} searchType={this.props.searchType}/>);
    });

    let searchMessage = this.props.searchValue == null ? `Showing ${this.props.itemCount} results.` :
      `Search for "${this.props.searchValue}" returned ${this.props.itemCount} results.`;

    let showAllButtonClass = this.props.searchValue == null ? 'span-hidden' : 'pull-right';

    return (
      <div className="col-lg-12">
        <div className="ibox">

          <div className="ibox-content">



            {/* <h2>{searchMessage}</h2> */}

            <div className="search-form">
              <form>

                {/* <div className="input-group">
                    <input type="text" placeholder="Search for..." id="search" className=" form-control" />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-white" onClick={this.handleClick}>Search</button>
                    </span>
                </div> */}


                <div className="input-group">
                    <input type="text" placeholder="Search for..." id="search" className="input form-control" />
                    <span className="input-group-btn">
                      {/* btn-height-fix is needed because for some reason the text field is heigher than the button - no apparent reason */}
                      <button type="submit" className="btn btn btn-primary btn-height-fix" onClick={this.handleClick}> <i className="fa fa-search"></i> Search</button>
                    </span>
                </div>


                <div className="hr-line-dashed"></div>

                <div>
                  <div className={showAllButtonClass}>
                    <div className="ibox-tools">
                        <a href="" className="btn btn-primary btn-xs" onClick={this.handleClick}>Show All</a>
                    </div>
                  </div>
                  <strong>{searchMessage}</strong>
                </div>

                {/* <div className="input-group">
                  <input type="text" placeholder="Search for..." id="search" name="search" className="form-control input-lg" />
                  <div className="input-group-btn">
                    <button className="btn btn-lg btn-primary" type="submit" onClick={this.handleClick}>
                      Search
                    </button>
                  </div>
                </div> */}


              </form>
            </div>


            {rows}

          </div>
        </div>
      </div>
    );
  }
}

export default LexiconContainer;
