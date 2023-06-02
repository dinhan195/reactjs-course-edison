/** @format */

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import counterSlice from '../components/Practice-3/counterSlice';

const rootReducer = combineReducers({
  counter: counterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});
