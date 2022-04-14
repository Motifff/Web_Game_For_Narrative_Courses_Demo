import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import MainPage from './pages/main-page/index.js';
import reportWebVitals from './reportWebVitals';

//import SelectPage from './pages/login/index.js';
//import PressInput from './pages/login/pressInput.js';

import Loading from './pages/login/Loadingpage.js';
//import Result from './pages/main-page/result.js';

//import Match from './pages/login/matching.js';

ReactDOM.render(
  
    <body>
      <Loading/>
     
    </body>
  
  ,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

