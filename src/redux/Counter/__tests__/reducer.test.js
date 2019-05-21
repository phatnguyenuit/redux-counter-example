import {
  ADD,
  DECREASE,
  INCREASE,
  REMOVE,
  UPDATE
} from '../constants';

import reducer from '../reducer';

describe("Test Counter reducer", () => {
  it('should return the initial state', () => {
    const expectedState = {
      counters: {},
      counterIDs: []
    }
    expect(reducer(undefined, {})).toEqual(expectedState);
  });
  it('should handle ADD new Counter', () => {
    const expectedState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 1,
        }
      },
      counterIDs: ['COUNTER_1']
    }
    expect(reducer(undefined, {
      type: ADD,
      payload: {
        counterValues: {
          text: 'Counter 1',
          value: 1,
        }
      }
    })).toEqual(expectedState);
  });
  it('should handle REMOVE a Counter', () => {
    const inititialState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 1,
        },
        COUNTER_2: {
          text: 'Counter 2',
          value: 2,
        },
      },
      counterIDs: ['COUNTER_1', 'COUNTER_2']

    }
    const expectedState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 1,
        },
      },
      counterIDs: ['COUNTER_1']
    }
    expect(reducer(inititialState, {
      type: REMOVE,
      payload: {
        counterID: 'COUNTER_2'
      }
    })).toEqual(expectedState);
  });

  it('should handle UPDATE a Counter', () => {
    const inititialState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 1,
        }
      },
      counterIDs: ['COUNTER_1']

    }
    const expectedState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1(edited)',
          value: 10,
        },
      },
      counterIDs: ['COUNTER_1']
    }
    expect(reducer(inititialState, {
      type: UPDATE,
      payload: {
        counterID: 'COUNTER_1',
        counterValues: {
          text: 'Counter 1(edited)',
          value: 10
        }
      }
    })).toEqual(expectedState);
  });

  it('should handle INCREASE a Counter', () => {
    const inititialState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 1,
        }
      },
      counterIDs: ['COUNTER_1']
    }
    const expectedState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 11,
        },
      },
      counterIDs: ['COUNTER_1']
    }
    expect(reducer(inititialState, {
      type: INCREASE,
      payload: {
        counterID: 'COUNTER_1',
        value: 10
      }
    })).toEqual(expectedState);
  });

  it('should handle DECREASE a Counter', () => {
    const inititialState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 100,
        }
      },
      counterIDs: ['COUNTER_1']
    }
    const expectedState = {
      counters: {
        COUNTER_1: {
          text: 'Counter 1',
          value: 10,
        },
      },
      counterIDs: ['COUNTER_1']
    }
    expect(reducer(inititialState, {
      type: DECREASE,
      payload: {
        counterID: 'COUNTER_1',
        value: 90
      }
    })).toEqual(expectedState);
  });
})