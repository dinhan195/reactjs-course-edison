/** @format */

import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import PrivateGroup from './components/lesson-13-router/Practice/Practice-2/PrivateGroup';
import ProtectedGroup from './components/lesson-13-router/Practice/Practice-2/ProtectedGroup';
import UserProfile from './components/lesson-13-router/Practice/Practice-2/UserProfile';
import SearchParam from './components/lesson-13-router/Practice/Practice-3/SearchParam';
import Home from './components/lesson-13-router/Exercise/Exercise-1/Home';
import ProductDetail from './components/lesson-13-router/Exercise/Exercise-1/ProductDetail';
import Admin from './components/lesson-13-router/Exercise/Exercise-1/Admin';
import HomePage from './components/lesson-13-router/Exercise/Exercise-2/HomePage';
import LoginPage from './components/lesson-13-router/Exercise/Exercise-2/LoginPage';
import React from 'react';
const UserDetails = React.lazy(() =>
  import('./components/lesson-13-router/Practice/Practice-4/UserDetail.jsx')
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Helllo</h1>
      </div>
    ),
  },
  //Practice 1
  {
    path: 'about',
    element: <Layout />,
    children: [
      {
        path: '/about',
        element: <div>About</div>,
      },
      {
        path: '/about/us',
        element: <div>About us</div>,
      },
      {
        path: '/about/me',
        element: <div>About me</div>,
      },
    ],
  },
  //  Practice 2
  {
    path: '/private-group',
    element: (
      <ProtectedGroup isMember={false}>
        <PrivateGroup />
      </ProtectedGroup>
    ),
  },
  {
    path: '/user/:userId',
    element: <UserProfile />,
  },
  {
    path: '/user-detail',
    element: <SearchParam />,
  },
  //Practise 4
  {
    path: '/user-crazy',
    element: (
      <React.Suspense fallback="loading">
        <UserDetails />
      </React.Suspense>
    ),
  },
  //Exercise 1
  {
    path: '/home/',
    element: <Home />,
  },
  {
    path: 'product/:productId',
    element: <ProductDetail />,
  },
  {
    path: 'admin',
    element: <Admin />,
  },
  //Exercise 2
  {
    path: '/bt2/home',
    element: <HomePage isLogin={true} />,
  },
  {
    path: '/bt2/login',
    element: <LoginPage isLogin={false} />,
  },
  {
    path: '*',
    element: <div>404-Not Found</div>,
  },
]);
export default router;
