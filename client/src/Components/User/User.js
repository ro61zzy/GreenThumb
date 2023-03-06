import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
useEffect(() => {
  const token = localStorage.getItem('jwtToken');
  if (!token) {
    navigate('/login');
  } else {
    // extract the user ID from the JWT token
    const { userId } = jwt.decode(token);

    // make a call to the API to retrieve the user details
    fetch(`/profile/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then(response => response.json())
    .then(data => setUser(data))
    .catch(error => console.error(error));
  }
}, [navigate]);


  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  }

  if (!user) {
    return null; // or loading spinner or other UI
  }

  return (
    <div>
      <h1>{user.username}</h1>
      <img src={user.image} alt={user.username} />
      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;
