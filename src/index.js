import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // deda app komponenta, tai ir atsidarantis ir uzsidartantis tagas <App></App> tas pats
  <App />, 
  // susiranda indexe root elementa ir i ta elementa sudeda dinamiskai sugeneretuos elementus (public folderyje html index)
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
