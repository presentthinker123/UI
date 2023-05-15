// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function RandomUser() {
  const [user, setUser] = useState({
    picture: 'https://randomuser.me/api/portraits/women/92.jpg',
    name: 'Emmi Kämpf',
    gender: 'female',
    email: 'emmi.kampf@example.com',
    username: 'smallrabbit761'
  });

  const fetchRandomUser = () => {
    fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        const user = data.results[0];
        setUser({
          picture: user.picture.large,
          name: `${user.name.first} ${user.name.last}`,
          gender: user.gender,
          email: user.email,
          username: user.login.username
        });
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div id="user-container">
      <div id="user-info">
        <img src={user.picture} alt={user.name} />
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Gender:</strong> {user.gender}
        </p>
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Username:</strong> {user.username}
        </p>
      </div>
      <button id="new-user-button" onClick={fetchRandomUser}>
        Get New User
      </button>
    </div>
  );
}

export default RandomUser;