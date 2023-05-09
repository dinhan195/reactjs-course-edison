/** @format */

import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout(props) {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
