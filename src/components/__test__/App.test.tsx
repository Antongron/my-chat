import * as React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Hello } from '../Hello';
const initialState: { email: string; password: string } = {
  email: '',
  password: '',
};
const reducer = (
  state: { password: string; email: string },
  action: { type: string; email: string; password: string },
) => {
  switch (action.type) {
    case 'CLICK_ALERT': {
      state.email = action.email;
      state.password = action.password;
      return state;
    }
    default:
      return state;
  }
};
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware));
describe('Our first suite', () => {
  test('renders authorization screen', () => {
    const container = render(
      <Provider store={store}>
        <Hello />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });
});
