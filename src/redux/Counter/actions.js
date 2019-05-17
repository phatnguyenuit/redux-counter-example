import {
  ADD_COUNTER,
  DECREASE,
  INCREASE,
  REMOVE_COUNTER,
  RESET,
  UPDATE
} from './constants';

export const add = counterValues => ({
  type: ADD_COUNTER,
  payload: {
    counterValues
  }
});

export const remove = counterID => ({
  type: REMOVE_COUNTER,
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
export const reset = counterID => ({
  type: RESET,
  payload: {
    counterID
  }
});

export const update = (counterID, values) => ({
  type: UPDATE,
  payload: {
    counterID,
    values
  }
});
