import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './stores';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
