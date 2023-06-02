/** @format */

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../components/Practice-3/counterSlice';

export function createNewStore() {
  return configureStore({
    reducer: {
      counter: counterSlice,
    },
  });
}
