/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Contacts from './features/exercise-1/Contacts';
import AddNewArticle from './features/practice-2/AddNewArticle';
import AddProductForm from './features/practice-3/AddProductForm';
import StudentList from './features/excerise-2/StudentList';
import TodoApp from './features/practice-1/TodoApp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/practice-1',
        element: <TodoApp />,
      },
      {
        path: '/practice-2',
        element: <AddNewArticle />,
      },
      {
        path: '/practice-3',
        element: <AddProductForm />,
      },
      {
        path: '/exercise-1',
        element: <Contacts />,
      },
      {
        path: '/exercise-2',
        element: <StudentList />,
      },
    ],
  },
  {
    path: '*',
    element: <div>Error router 404</div>,
  },
]);
export default router;
