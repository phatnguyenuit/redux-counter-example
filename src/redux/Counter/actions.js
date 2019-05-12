import {
  ADD_TODO
} from './types';

export const addToDo = text => ({
  type: ADD_TODO,
  payload: {
    text
  }
})