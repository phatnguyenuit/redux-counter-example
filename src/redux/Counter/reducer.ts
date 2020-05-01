import { ADD, DECREASE, INCREASE, REMOVE, UPDATE } from './constants';

import { CounterValues } from 'components/Counter/Counter';
import { PayloadAction } from '../types';

/*
counters: {
    <Counter ID>: {
      text: 'Counter text',
      value: 0,
    }
  },
  counterIDs: ['<Counter ID>', ...]
*/

interface CounterState {
  counters: Record<number, CounterValues>;
  counterIDs: Array<number>;
}

const generateUniqueID = () => new Date().valueOf();

const createInitalState = (): CounterState => ({
  counters: {},
  counterIDs: [],
});

const reducer = (
  prevState = createInitalState(),
  action: PayloadAction,
): CounterState => {
  const { type, payload } = action;
  const { counters, counterIDs } = prevState;
  switch (type) {
    case INCREASE: {
      const { value, counterID } = action.payload as {
        value: number;
        counterID: number;
      };
      if (counterIDs.indexOf(counterID) === -1) return prevState;

      const selectedCounter = counters[counterID];
      return {
        ...prevState,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            value: selectedCounter.value + value,
          },
        },
      };
    }
    case DECREASE: {
      const { value, counterID } = payload as {
        value: number;
        counterID: number;
      };
      if (counterIDs.indexOf(counterID) === -1) {
        return prevState;
      }
      const selectedCounter = counters[counterID];

      return {
        ...prevState,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            value: selectedCounter.value - value,
          },
        },
      };
    }
    case UPDATE: {
      const { counterID, counterValues } = payload;
      if (counterIDs.indexOf(counterID) === -1) return prevState;

      const selectedCounter = counters[counterID];
      return {
        ...prevState,
        counters: {
          ...counters,
          [counterID]: {
            ...selectedCounter,
            ...counterValues,
          },
        },
      };
    }
    case ADD: {
      const { counterValues } = payload as { counterValues: CounterValues };
      const newCounterID = generateUniqueID();
      return {
        ...prevState,
        counterIDs: [...counterIDs, newCounterID],
        counters: {
          ...counters,
          [newCounterID]: {
            ...counterValues,
          },
        },
      };
    }
    case REMOVE: {
      const { counterID } = payload as { counterID: number };
      if (counterIDs.indexOf(counterID) === -1) return prevState;

      const newCounterIDs = counterIDs.filter(id => id !== counterID);
      const newCounters = newCounterIDs.reduce(
        (prevCounters, id) =>
          Object.assign(prevCounters, {
            [id]: counters[id],
          }),
        {},
      ) as Record<number, CounterValues>;
      return {
        ...prevState,
        counters: newCounters,
        counterIDs: newCounterIDs,
      };
    }
    default:
      return prevState;
  }
};

export default reducer;
