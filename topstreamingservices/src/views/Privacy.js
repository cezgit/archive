import React from 'react';

import TitleHeader from '../components/shared/TitleHeader';
import PrivacyContainer from '../components/PrivacyContainer';

function Terms(props) {

  return (
    <div className="wrapper wrapper-content animated fadeInUpBig">

      <TitleHeader title="Top Streaming Services" subtitle="Privacy Policy"/>

      <div className="row">
        <PrivacyContainer />
      </div>

    </div>
  );
};

export default Terms;
