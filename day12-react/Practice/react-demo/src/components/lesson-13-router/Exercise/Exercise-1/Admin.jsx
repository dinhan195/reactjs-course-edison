/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const isMember = false;
  const navigate = useNavigate();

  const handleRedirecUser = () => {
    setTimeout(() => {
      navigate('/home');
    }, 3000);
  };

  if (!isMember) {
    handleRedirecUser();
    return <div>bạn không phải là Admin quay về trang chủ trong 3 giây</div>;
  }

  return <div>Trang admin</div>;
}

export default Admin;
