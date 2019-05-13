import {
  ADD_COUNTER,
  DECREASE,
  INCREASE,
  REMOVE_COUNTER,
} from './constants';

export const addCounter = (text) => ({
  type: ADD_COUNTER,
  payload: {
    text
  }
})

export const removeCounter = (counterID) => ({
  type: REMOVE_COUNTER,
  payload: {
    counterID
  }
})

export const increase = (counterID, value = 1) => ({
  type: INCREASE,
  payload: {
    counterID,
    value
  }
})
export const decrease = (counterID, value = 1) => ({
  type: DECREASE,
  payload: {
    counterID,
    value
  }
})
export const reset = (counterID) => ({
  type: DECREASE,
  payload: {
    counterID,
  }
})