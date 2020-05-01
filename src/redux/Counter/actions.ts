import { ADD, DECREASE, INCREASE, REMOVE, UPDATE } from './constants';
import { CounterValues } from 'components/Counter/Counter';

export const add = (counterValues: CounterValues) => ({
  type: ADD,
  payload: {
    counterValues,
  },
});

export const remove = (counterID: number) => ({
  type: REMOVE,
  payload: {
    counterID,
  },
});

export const increase = (counterID: number, value = 1) => ({
  type: INCREASE,
  payload: {
    counterID,
    value,
  },
});
export const decrease = (counterID: number, value = 1) => ({
  type: DECREASE,
  payload: {
    counterID,
    value,
  },
});

export const update = (counterID: number, counterValues: CounterValues) => ({
  type: UPDATE,
  payload: {
    counterID,
    counterValues,
  },
});
