import React from 'react';
import { useCallback } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import PassID from './PassID';
import { OuterComponent } from './Practice';
import { increment, countSelector, decrement } from './reducers';

export default function Play() {
    const store = useStore();
    const count = useSelector(countSelector);
    const dispatch = useDispatch();

    const handleIncrement = useCallback(() => dispatch(increment()), [dispatch]);
    const handleDecrement = useCallback(() => dispatch(decrement()), [dispatch]);

  return (
    <div>
        <h1>Your count: {count}</h1>
        <button onClick={() => {handleIncrement()}}>increment</button>
        <button onClick={()=> handleDecrement()}>decrement</button>
        <p>the whole motherfucking store: {store.getState().count}</p>
        <PassID />
        <OuterComponent />
    </div>
  );
}