import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './store/index';
import { Hello } from './components/Hello';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('app'),
);
