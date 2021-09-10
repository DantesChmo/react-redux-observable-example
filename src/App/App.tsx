import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { counterSlice } from '../entities/counter';
import logo from './logo.svg';

import type { FunctionComponent } from 'react';

const App: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector((state) => state.counter.data);

  console.log(count);

  return (
    <div>
      <button onClick={() => dispatch(counterSlice.actions.request())}>
        PRESS ME
      </button>
    </div>
  );
};

export {
  App
};
