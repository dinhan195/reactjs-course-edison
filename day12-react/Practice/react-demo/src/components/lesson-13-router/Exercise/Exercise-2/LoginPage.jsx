/** @format */

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage({ isLogin }) {
  const navigate = useNavigate();

  const redirectUser = () => {
    setTimeout(() => {
      navigate('/bt2/home');
    }, 3000);
  };
  if (!isLogin) {
    redirectUser();
    return <div>Đã login chuyển về trang chủ trong 3 giây</div>;
  }
  return (
    <div>
      <Link to="ht2/login"></Link>
      <p>Trang đăng nhập</p>
    </div>
  );
}

export default LoginPage;
