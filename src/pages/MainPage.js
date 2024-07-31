import React from 'react';
import { Container } from 'react-bootstrap';
import './css/MainPage.css';

function MainPage({ username }) {
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
