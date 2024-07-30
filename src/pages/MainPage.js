import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';
import './css/MainPage.css'; // CSS 파일 경로 수정

function MainPage() {
  return (
    <div>
      <Container className="container-main mt-5">
        <h1>Welcome to SecureTalk</h1>
        <p>This is a secure community platform.</p>
      </Container>
    </div>
  );
}

export default MainPage;
