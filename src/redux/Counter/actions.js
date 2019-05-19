import {
  ADD,
  DECREASE,
  INCREASE,
  REMOVE,
  UPDATE
} from './constants';

export const add = counterValues => ({
  type: ADD,
  payload: {
    counterValues
  }
});

export const remove = counterID => ({
  type: REMOVE,
  payload: {
    counterID
  }
});

export const increase = (counterID, value = 1) => ({
  type: INCREASE,
  payload: {
    counterID,
    value
  }
});
export const decrease = (counterID, value = 1) => ({
  type: DECREASE,
  payload: {
    counterID,
    value
  }
});

export const update = (counterID, values) => ({
  type: UPDATE,
  payload: {
    counterID,
    values
  }
});