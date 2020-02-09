import React, {Component} from 'react';

import { Accordion, AccordionItem } from 'react-sanfona';

import GoodBadItem from '../shared/GoodBadItem';

class GoodBad extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    let goodTitle = (<div className="goodbad-block">
      <button className="btn btn-success btn-circle goodbad-button" type="button"><i className="fa fa-check"></i></button>
      <span className="goodbad-title"><a>The Good</a></span></div>);

    let badTitle = (<div className="goodbad-block">
      <button className="btn btn-danger btn-circle goodbad-button" type="button"><i className="fa fa-times"></i></button>
      <span className="goodbad-title"><a>The Bad</a></span></div>);


    let good = [], bad = [];
    if(this.props.service.pros) {
      this.props.service.pros.forEach( (pro) => {
        good.push(<GoodBadItem item={pro} />);
      });
    }
    if(this.props.service.cons) {
      this.props.service.cons.forEach( (con) => {
        bad.push(<GoodBadItem item={con} />);
      });
    }

    return (
      <div>
        <Accordion>
          <AccordionItem title={goodTitle} expanded="true">
            <div>
              {good}
            </div>
          </AccordionItem>
          <AccordionItem title={badTitle}>
            <div>
              {bad}
            </div>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
}

export default GoodBad;
