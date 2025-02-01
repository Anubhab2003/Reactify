import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext'; // Ensure the correct import

function Profile() {
  const { user } = useContext(UserContext); // Correct usage

  if (!user) return <h2>Please login</h2>;

  return <div>Welcome {user.username}</div>;
}

export default Profile;
