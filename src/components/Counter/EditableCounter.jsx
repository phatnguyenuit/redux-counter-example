import React from "react";

const EdiatbleCounter = props => {
  const { id, text, value, onDecrease, onIncrease, onReset } = props;
  return (
    <div>
      <h1>{text}</h1>
      <div>
        <button onClick={onDecrease(id)}>-</button>
        <div>
          <span>{value}</span>
        </div>
        <button onClick={onIncrease(id)}>+</button>
      </div>
      <div>
        <button onClick={onReset(id)}>Reset</button>
      </div>
    </div>
  );
};

export default EdiatbleCounter;
