import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // CSS 파일 임포트

function AppNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Container>
        <Navbar.Brand href="/" className="navbar-brand">SecureTalk</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/posts">Community Posts</Nav.Link>
            <Nav.Link as={Link} to="/posts/new">Write a Post</Nav.Link>
            <Nav.Link as={Link} to="/posts/:id">Post Detail</Nav.Link>
            <Nav.Link as={Link} to="/posts/:id/edit">Edit Post</Nav.Link>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>  {/* ProfilePage 링크 추가 */}
            <Nav.Link as={Link} to="/reset-password">Reset Password</Nav.Link>  {/* ResetPasswordPage 링크 추가 */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
