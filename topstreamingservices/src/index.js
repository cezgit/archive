import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

import {IntlProvider} from 'react-intl';

import registerServiceWorker from './registerServiceWorker';

import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.css'
import 'animate.css/animate.min.css'
import 'sweetalert/dist/sweetalert.css'
import './styles/style.css'
import './styles/custom.css'

const rootElement = (
  <IntlProvider locale="en">
    <Router>
      <Route path="/" component={App} />
    </Router>
  </IntlProvider>
);

ReactDOM.render(
  rootElement,
  document.getElementById('root')
);

registerServiceWorker();
