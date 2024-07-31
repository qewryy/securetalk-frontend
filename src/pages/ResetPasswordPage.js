import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import './css/ResetPasswordPage.css';

function ResetPasswordPage() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8080/api/users/reset-password', { email })
      .then(response => setMessage('Password reset link has been sent to your email.'))
      .catch(error => setMessage('Error sending password reset link.'));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Reset Password</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">Send Reset Link</Button>
      </Form>
      {message && <p>{message}</p>}
    </Container>
  );
}

export default ResetPasswordPage;
