/** @format */

import React from 'react';
import { useParams } from 'react-router-dom';

function UserProfile() {
  const params = useParams();
  const userId = params.userId;

  return <div>Profile of User ID = {userId}</div>;
}

export default UserProfile;
