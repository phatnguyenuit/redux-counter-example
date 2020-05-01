import Counter from '../Counter';
import React from 'react';
import { CounterValues } from '../Counter/Counter';

const CounterList = (props: CounterListProps) => {
  const { counterIDs = [], counters } = props;
  return (
    <>
      {counterIDs.map(counterID => {
        const counter = counters[counterID];
        return <Counter key={counterID} id={counterID} {...counter} />;
      })}
    </>
  );
};

export default CounterList;

export interface CounterListProps {
  counterIDs: Array<number>;
  counters: Record<number, CounterValues>;
}
