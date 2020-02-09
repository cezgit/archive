import React from 'react';

import TitleHeader from '../components/shared/TitleHeader';
import TermsContainer from '../components/TermsContainer';

function Terms(props) {

  return (
    <div className="wrapper wrapper-content animated fadeInUp">

      <TitleHeader title="Top Streaming Services" subtitle="Terms Of Use"/>

      <div className="row">
        <TermsContainer />
      </div>

    </div>
  );
};

export default Terms;
