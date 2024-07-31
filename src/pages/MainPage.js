import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import './css/MainPage.css';

function MainPage() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8080/api/users/session')
      .then(response => {
        setUsername(response.data.username);
      })
      .catch(error => {
        console.error(error);
        setUsername(null);
      });
  }, []);

  return (
    <div>
      <Container className="container-main mt-5">
        <h1>Welcome to SecureTalk</h1>
        <p>This is a secure community platform.</p>
        {username ? (
          <p>Welcome, {username}!</p>
        ) : (
          <p>You are not logged in.</p>
        )}
      </Container>
    </div>
  );
}

export default MainPage;
