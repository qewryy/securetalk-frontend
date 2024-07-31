import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import axios from '../api/axios';
import './AppNavbar.css';

function AppNavbar() {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get('/users/session');
        setUsername(response.data.username);
      } catch (error) {
        console.error(error);
        setUsername(null);
      }
    };

    fetchSession();
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post('/users/logout');
      setUsername(null);
      window.location.href = '/';
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">SecureTalk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {username ? (
              <>
                <Nav.Link>{username}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            )}
            <Nav.Link as={Link} to="/posts">Community Posts</Nav.Link>
            <Nav.Link as={Link} to="/posts/new">Write a Post</Nav.Link>
            <Nav.Link as={Link} to="/reset-password">Reset Password</Nav.Link>
            <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
