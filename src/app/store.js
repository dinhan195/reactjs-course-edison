/** @format */

import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

import counterReducer from '../features/counter/counterSlice';
import todoReducer from '../features/practice-1/todoSlice';
import manageUserReducer from '../features/practice-2/manageUserSlice';
import productReducer from '../features/practice-3/productSlice';
import contactReducer from '../features/exercise-1/contactSlice';
import studentReducer from '../features/excerise-2/studentSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  user: manageUserReducer,
  contact: contactReducer,
  product: productReducer,
  student: studentReducer,
});
const persistConfig = {
  key: 'key',
  storage,
  whitelist: ['product'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
});
export default store;
