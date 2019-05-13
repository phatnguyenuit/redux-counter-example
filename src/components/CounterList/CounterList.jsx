import Counter from "../Counter";
import React from "react";

const CounterList = props => {
  const { counterIDs = [], counters, addCounter } = props;
  return (
    <div>
      <button onClick={addCounter}>Add new Counter</button>
      {counterIDs.map((counterID, index) => {
        const counter = counters[counterID];
        return <Counter key={counterID} id={counterID} {...counter} />;
      })}
    </div>
  );
};

export default CounterList;
