/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [],
};
let id = 1;
const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push({ ...action.payload, id: id++ });
    },
    onFavorite: (state, action) => {
      state.contacts = state.contacts.map((contact, index) => {
        if (contact.id === action.payload) {
          if (contact.status === '') {
            return { ...contact, status: 'favorite' };
          } else {
            return { ...contact, status: '' };
          }
        }
        return contact;
      });
    },
    onRemove: (state, action) => {
      state.contacts = state.contacts.filter(contact => {
        return contact.id !== action.payload 
      })
    }
  },
});

export const { addContact, onFavorite, onRemove } = contactSlice.actions;
export default contactSlice.reducer;
