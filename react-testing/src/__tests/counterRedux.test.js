/** @format */

import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createNewStore } from '../app/counterNewStore';
import CounterRedux from '../components/Practice-3/CounterRedux';

test('Check COuter render correctly', () => {
  render(
    <Provider store={createNewStore()}>
      <CounterRedux />
    </Provider>
  );
  const numberDOM = screen.getByTestId('number');
  expect(numberDOM.textContent).toEqual('0');
});
test('Check user clicked increase', () => {
  render(
    <Provider store={createNewStore()}>
      <CounterRedux />
    </Provider>
  );
  const increaseDOM = screen.getByLabelText('Increment value');
  const numberDOM = screen.getByTestId('number');
  fireEvent.click(increaseDOM);
  expect(numberDOM.textContent).toEqual('1');
  fireEvent.click(increaseDOM);
  expect(numberDOM.textContent).toEqual('2');
});

test('Check user clicked decrease', () => {
  render(
    <Provider store={createNewStore()}>
      <CounterRedux />
    </Provider>
  );
  const increaseDOM = screen.getByLabelText('Increment value');
  const decreaseDOM = screen.getByLabelText('Decrement value');
  const numberDOM = screen.getByTestId('number');
  fireEvent.click(decreaseDOM);
  expect(numberDOM.textContent).toEqual('0');
  fireEvent.click(increaseDOM);
  fireEvent.click(increaseDOM);
  fireEvent.click(decreaseDOM);
  expect(numberDOM.textContent).toEqual('1');
});
