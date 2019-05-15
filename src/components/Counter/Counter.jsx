import "./Counter.scss";

import React from "react";

const Counter = props => {
  const { id, text, value, onDecrease, onIncrease, onReset } = props;
  return (
    <div className="counter">
      <h1 className="title">{text}</h1>
      <div className="control">
        <button
          onClick={() => onDecrease(id)}
          className="button button-decrease"
        >
          -
        </button>
        <div className="value">
          <span>{value}</span>
        </div>
        <button
          onClick={() => onIncrease(id)}
          className="button button-increase"
        >
          +
        </button>
      </div>
      <button onClick={() => onReset(id)} className="button button-reset">
        Reset
      </button>
    </div>
  );
};

export default Counter;
