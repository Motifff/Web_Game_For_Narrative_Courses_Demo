import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectPage from './pages/login/index.js';
import PressInput from './pages/login/pressInput.js';

ReactDOM.render(
  <body>
    <SelectPage/>
    <PressInput/>
  </body>
  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

