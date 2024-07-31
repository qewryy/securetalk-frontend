import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './AppNavbar.css';

function AppNavbar({ username, handleLogout }) {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand">SecureTalk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            {username ? (
              <>
                <Nav.Link as={Link} to="/profile">{username}</Nav.Link>
                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
              </>
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
