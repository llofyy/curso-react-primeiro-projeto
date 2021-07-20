import React from 'react';
import ReactDOM from 'react-dom';
import './styles/global-styles.css';
import Home from './templates/Home';
// import HomeClass from './templates/HomeClass';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);
