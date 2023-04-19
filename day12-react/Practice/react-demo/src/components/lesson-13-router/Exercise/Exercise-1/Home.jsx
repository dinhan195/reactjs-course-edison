/** @format */

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  // const paramId = useParams();
  return (
    <div>
      <Link to="/admin">Admin</Link>
      <h3>Danh sách sảm phẩm</h3>
      <ul>
        <li>
          <Link to="/product/1">Product</Link>
        </li>
        <li>
          <Link to="/product/2">Product</Link>
        </li>
        <li>
          <Link to="/product/3">Product</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
