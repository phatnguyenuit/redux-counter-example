import {
  counterIDsSelector,
  counterSelector,
  countersSelector,
  makeGetCounterTextSelector,
  makeGetCounterValueSelector
} from "../selectors";

const initialState = {
  counterReducer: {
    counters: {
      COUNTER_1: {
        text: "Counter 1",
        value: 1
      }
    },
    counterIDs: ["COUNTER_1"]
  }
};

const initialProps = {
  id: 'COUNTER_1'
}

describe("Test Counter Selectors", () => {
  it("test counters Selector", () => {
    const exptectedCounters = {
      COUNTER_1: {
        text: "Counter 1",
        value: 1
      }
    };
    const receivedCounters = countersSelector(initialState);
    expect(receivedCounters).toEqual(exptectedCounters);
  });

  it("test counterIDs Selector", () => {
    const exptectedCounterIDs = [
      'COUNTER_1'
    ];
    const receivedCounterIDs = counterIDsSelector(initialState);
    expect(receivedCounterIDs).toEqual(exptectedCounterIDs);
  });
});