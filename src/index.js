import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './demos/xst/fetch_img/xstate/App';
// import App from './demos/xst_modals/demo-d/App';
// import App from './demos/courses/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
