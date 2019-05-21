import {
  createSelector
} from 'reselect'

export const counterSelector = (state, props) => state.counterReducer.counters[props.id];
export const countersSelector = (state) => state.counterReducer.counters;
export const counterIDsSelector = (state) => state.counterReducer.counterIDs;

export const makeGetCounterValueSelector = () => createSelector(
  counterSelector,
  counter => counter.value
)
export const makeGetCounterTextSelector = () => createSelector(
  counterSelector,
  counter => counter.text
)