import Counter from '../Counter';
import React from 'react';

const CounterList = props => {
  const { counterIDs = [], counters } = props;
  return (
    <div className='counterList'>
      {counterIDs.map(counterID => {
        const counter = counters[counterID];
        return <Counter key={counterID} id={counterID} {...counter} />;
      })}
    </div>
  );
};

export default CounterList;
