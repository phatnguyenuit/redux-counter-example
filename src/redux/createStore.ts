import { createStore } from 'redux';
import rootReducer from './rootReducer';

const configureStore = (preloadedState = {}) =>
  createStore(rootReducer, preloadedState);

export default configureStore;
