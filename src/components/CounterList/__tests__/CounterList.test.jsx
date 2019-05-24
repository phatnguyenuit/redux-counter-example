import 'jest-dom/extend-expect';

import { cleanup, fireEvent, render } from 'react-testing-library';

import CounterList from '..';
import { Provider } from 'react-redux';
import React from 'react';
//https://peterhrynkow.com/testing/2019/01/01/testing-atoms-and-molecules.html
/* Using molecules testing to test connected Component if it works well*/
import createStore from '../../../redux/createStore';

const store = createStore({
  counterReducer: {
    counters: {
      COUNTER_1: {
        text: 'Counter 1',
        value: 0
      }
    },
    counterIDs: ['COUNTER_1']
  }
});

afterEach(cleanup);

describe('Test CounterList to make sure it works well with redux', () => {
  it('increments the counter', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <CounterList />
      </Provider>
    );

    const value = getByTestId('value');
    const button_increase = getByTestId('button-increase');
    const button_decrease = getByTestId('button-decrease');

    expect(value).toHaveTextContent('0');

    fireEvent.click(button_increase);
    expect(value).toHaveTextContent('1');

    fireEvent.click(button_decrease);
    expect(value).toHaveTextContent('0');
  });
});
