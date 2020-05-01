import { combineReducers } from 'redux';
import counterReducer from './Counter/reducer';

const rootReducer = combineReducers({
  counterReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
