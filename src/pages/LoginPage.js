import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import './LoginPage.css';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };
    axios.post('http://localhost:8080/api/users/login', user)
      .then(response => {
        console.log(response.data);
        // 로그인 성공 시 처리
      })
      .catch(error => {
        console.error(error);
        // 로그인 실패 시 처리
      });
  };

  return (
    <Container className="container-main mt-5">
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formUsername">
          <Form.Label><FaUser /> Username</Form.Label>
          <Form.Control 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter username" 
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label><FaLock /> Password</Form.Label>
          <Form.Control 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter password" 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 login-btn">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
