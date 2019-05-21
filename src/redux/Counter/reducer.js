import {
  ADD,
  COUNTER_PREFIX,
  DECREASE,
  INCREASE,
  REMOVE,
  UPDATE
} from './constants';

import uniqueId from 'lodash/uniqueId';

/*
counters: {
    <Counter ID>: {
      text: 'Counter text',
      value: 0,
    }
  },
  counterIDs: ['<Counter ID>', ...]
*/
const createInitalState = () => ({
  counters: {},
  counterIDs: []
});

const reducer = (state = createInitalState(), action) => {
  const {
    type,
    payload = {}
  } = action;
  const {
    counters,
    counterIDs
  } = state;
  switch (type) {
    case INCREASE: {
      const {
        value,
        counterID
      } = payload;
      if (counterIDs.indexOf(counterID) === -1) {
        return state;
      }
      const selectedCounter = counters[counterID];
      return {
        ...state,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            value: selectedCounter.value + value
          }
        }
      };
    }
    case DECREASE: {
      const {
        value,
        counterID
      } = payload;
      if (counterIDs.indexOf(counterID) === -1) {
        return state;
      }
      const selectedCounter = counters[counterID];

      return {
        ...state,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            value: selectedCounter.value - value
          }
        }
      };
    }
    case UPDATE: {
      const {
        counterID,
        counterValues
      } = payload;
      if (counterIDs.indexOf(counterID) === -1) {
        return state;
      }
      const selectedCounter = counters[counterID];
      return {
        ...state,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            ...counterValues
          }
        }
      };
    }
    case ADD: {
      const {
        counterValues
      } = payload;
      const newCounterID = uniqueId(COUNTER_PREFIX);
      return {
        ...state,
        counterIDs: [...counterIDs, newCounterID],
        counters: {
          ...counters,
          [newCounterID]: {
            ...counterValues
          }
        }
      };
    }
    case REMOVE: {
      const {
        counterID
      } = payload;
      if (counterIDs.indexOf(counterID) === -1) {
        return state;
      }
      const newCounterIDs = counterIDs.filter(id => id !== counterID);
      const newCounters = newCounterIDs.reduce((prevCounters, id) =>
        Object.assign(prevCounters, {
          [id]: counters[id]
        }), {}
      );
      return {
        ...state,
        counters: newCounters,
        counterIDs: newCounterIDs
      };
    }
    default:
      return state;
  }
};

export default reducer;