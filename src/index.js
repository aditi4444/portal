import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PortalApp from './PortalApp';
import 'react-toastify/dist/ReactToastify.css';

require('./assets/css/main.css')

ReactDOM.render(
  <PortalApp /> ,
  document.getElementById('root')
);
