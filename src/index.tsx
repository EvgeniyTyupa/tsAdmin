import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import store from './Redux/reduxStore';
import './Utils/i18n.js';
import Prealoder from './Components/Common/Preloader/Preloader';

ReactDOM.render(
  <Provider store={store}>
    <Suspense fallback={<Prealoder/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();