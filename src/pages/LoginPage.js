import React, { useState } from 'react';
import axios from '../api/axios';
import { Container, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import './css/LoginPage.css';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password };
    axios.post('/users/login', user)
      .then(response => {
        alert('Login successful');
        navigate('/'); // 메인 페이지로 리디렉션
        window.location.reload(); // 페이지 새로 고침
      })
      .catch(error => {
        alert('Login failed: ' + error.response.data);
        window.location.reload(); // 페이지 새로 고침
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
