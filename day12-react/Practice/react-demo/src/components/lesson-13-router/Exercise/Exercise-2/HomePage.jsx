/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage({ isLogin }) {
  const navigate = useNavigate();
  const redirectUser = () => {
    setTimeout(() => {
      navigate('/bt2/login');
    }, 3000);
  };
  if (!isLogin) {
    redirectUser();
    return <div>Chưa login chuyển về dăng nhập trong 3 giây</div>;
  }
  return (
    <div>
      <p>Trang chủ người dùng đã login</p>
    </div>
  );
}

export default HomePage;
