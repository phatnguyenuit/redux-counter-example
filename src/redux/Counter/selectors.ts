import { RootState } from '../rootReducer';
export const countersSelector = (state: RootState) =>
  state.counterReducer.counters;
export const counterIDsSelector = (state: RootState) =>
  state.counterReducer.counterIDs;
