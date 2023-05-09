/** @format */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};
let userId = 1;
let articleId = 1;
const manageUserSlice = createSlice({
  name: 'manageUser',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const newUser = {
        id: userId++,
        name: action.payload,
        article: [],
      };
      state.users.push(newUser);
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => {
        return user.id !== action.payload;
      });
    },
    addArticle: (state, action) => {
      const { userId, article } = action.payload;
      const userIndex = state.users.findIndex((user) => user.id === userId);
      if (userId !== -1) {
        const updatedArticles = [
          ...state.users[userIndex].article,
          { id: articleId++, article: article },
        ];
        state.users[userIndex] = {
          ...state.users[userIndex],
          article: updatedArticles,
        };
      }
    },
    removeArticle: (state, action) => {
      state.users = state.users.map((user) => {
        if (user.id === action.payload.userId) {
          user.article = user.article.filter((article) => {
            return article.id !== action.payload.articleId;
          });
        }
        return user;
      });
    },
  },
});

const { reducer, actions } = manageUserSlice;
export const { addUser, deleteUser, addArticle, removeArticle } = actions;
export default reducer;
