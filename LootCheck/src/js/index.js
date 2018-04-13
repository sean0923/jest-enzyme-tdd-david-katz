import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import ReactRouter from './ReactRouter';

render(
  <Provider store={store}>
    <ReactRouter />
  </Provider>,
  document.getElementById('app')
);
