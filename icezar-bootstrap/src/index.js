import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';

import App from './App';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'font-awesome/css/font-awesome.css'

import './assets/css/front.css';
import './assets/css/starter.css';
import './assets/css/main.css';

ReactDOM.render(
  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);
