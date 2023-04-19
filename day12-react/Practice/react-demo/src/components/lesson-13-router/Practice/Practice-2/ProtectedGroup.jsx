/** @format */

import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProtectedGroup({ isMember, children }) {
  const navigate = useNavigate();
  const handleRedirecUser = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  if (!isMember) {
    handleRedirecUser();
    return <div>Bạn không phải là thành viên nhóm này chuyển hướng sau 3s</div>;
  }
  return <div>{children}</div>;
}

export default ProtectedGroup;
