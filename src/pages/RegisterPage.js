import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import './css/RegisterPage.css';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { username, password, email };
    axios.post('http://localhost:8080/api/users/register', user)
      .then(response => {
        console.log(response.data);
        // 회원가입 성공 시 처리
      })
      .catch(error => {
        console.error(error);
        // 회원가입 실패 시 처리
      });
  };

  return (
    <Container className="container-main mt-5">
      <h1>Register</h1>
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
        <Form.Group controlId="formEmail">
          <Form.Label><FaEnvelope /> Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter email" 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3 register-btn">
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default RegisterPage;
