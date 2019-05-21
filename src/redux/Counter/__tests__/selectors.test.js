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
  it("test counter Selector", () => {
    const exptectedCounter = {
      text: "Counter 1",
      value: 1
    }
    const receivedCounter = counterSelector(initialState, initialProps);
    expect(receivedCounter).toEqual(exptectedCounter);
  });
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

  it("test counter value Selector", () => {
    const counterValueSelector = makeGetCounterValueSelector();
    const exptectedValue = 1;
    const receivedValue = counterValueSelector(initialState, initialProps);
    expect(receivedValue).toEqual(exptectedValue);
  });
  it("test counter text Selector", () => {
    const counterTextSelector = makeGetCounterTextSelector();
    const exptectedText = 'Counter 1';
    const receivedText = counterTextSelector(initialState, initialProps);
    expect(receivedText).toEqual(exptectedText);
  });
});