import { ADD, DECREASE, INCREASE, REMOVE, UPDATE } from "../constants";
import { add, decrease, increase, remove, update } from "../actions";

const text = "Counter 1";
const value = 10;

describe("Test Counter actions", () => {
  it("action CREATE counter", () => {
    const expectedAction = {
      type: ADD,
      payload: {
        counterValues: {
          text,
          value
        }
      }
    };
    expect(
      add({
        text,
        value
      })
    ).toEqual(expectedAction);
  });
  it("action REMOVE counter", () => {
    const counterID = "COUNTER_1";
    const expectedAction = {
      type: REMOVE,
      payload: {
        counterID
      }
    };
    expect(remove(counterID)).toEqual(expectedAction);
  });
  it("action UPDATE counter", () => {
    const counterID = "COUNTER_1";
    const expectedAction = {
      type: UPDATE,
      payload: {
        counterID,
        counterValues: {
          text,
          value
        }
      }
    };
    expect(
      update(counterID, {
        text,
        value
      })
    ).toEqual(expectedAction);
  });

  it("action INCREASE counter", () => {
    const counterID = "COUNTER_1";
    const expectedAction = {
      type: INCREASE,
      payload: {
        counterID,
        value
      }
    };
    expect(increase(counterID, value)).toEqual(expectedAction);
  });
  it("action DECREASE counter", () => {
    const counterID = "COUNTER_1";
    const expectedAction = {
      type: DECREASE,
      payload: {
        counterID,
        value
      }
    };
    expect(decrease(counterID, value)).toEqual(expectedAction);
  });
});
