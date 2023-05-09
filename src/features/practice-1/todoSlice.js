/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
const item = {
  id: 1,
  content: '',
  status: 'todo',
};

const todosSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.items.push({ ...item, id: item.id++, content: action.payload });
    },
    onFinish: (state, action) => {
      const index = state.items.findIndex(
        (value) => value.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index].status = 'finish';
      }
    },
    onRemove: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
   
  },
});
const { reducer, actions } = todosSlice;
export const { addTodo, onFinish, onRemove } = actions;
export default reducer;
