/** @format */

import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
      console.log(state);
    },
  },
});

const { reducer, actions } = counterSlice;
export const { increase, decrease } = actions;
export default reducer;
