/** @format */

import React from 'react';
import './App.scss';
import StudentList from './features/excerise-2/StudentList';
import { RouterProvider } from 'react-router-dom';
import router from './router';

function App() {
  return (
    <RouterProvider router={router}>
      <div className="App">
        <StudentList />
      </div>
    </RouterProvider>
  );
}

export default App;
