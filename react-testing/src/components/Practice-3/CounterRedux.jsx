/** @format */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './counterSlice';

const CounterRedux = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          data-testid="increase">
          Increment
        </button>
        <span data-testid="number">{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
          data-testid="decrease">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;
