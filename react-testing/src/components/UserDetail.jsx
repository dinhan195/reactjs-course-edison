/** @format */

import React from 'react';

const UserDetail = (props) => {
  const { info } = props;
  return (
    <div>
      <p data-testid="username">{info.username}</p>
      <p data-testid="email">{info.email}</p>
      <p data-testid="phone">{info.phone}</p>
    </div>
  );
};

export default UserDetail;
