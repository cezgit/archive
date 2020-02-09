import React from 'react';

import TitleHeader from '../components/shared/TitleHeader';
import AboutContainer from '../components/AboutContainer';

function About(props) {

  return (
    <div className="wrapper wrapper-content animated fadeInUp">

      <TitleHeader title="Top Streaming Services" subtitle="Who we are"/>

      <div className="row">
        <AboutContainer />
      </div>

    </div>
  );
};

export default About;
