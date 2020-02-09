import React from 'react';

import TitleHeader from '../components/shared/TitleHeader';
import ContactContainer from '../components/ContactContainer';

function Contact(props) {

  return (
    <div className="wrapper wrapper-content animated fadeInUp">

      <TitleHeader title="Top Streaming Services" subtitle="Can we help? This form will connect you to one of our support members."/>

      <div className="row">
        <ContactContainer />
      </div>

    </div>
  );
};

export default Contact;
