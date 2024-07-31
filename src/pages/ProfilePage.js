import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import './css/ProfilePage.css';

function ProfilePage() {
  const [profile, setProfile] = useState({ username: '', email: '' });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    // 사용자 정보를 가져오는 API 호출
    axios.get('http://localhost:8080/api/users/profile')
      .then(response => setProfile(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleEdit = () => setEditMode(true);

  const handleSave = () => {
    // 프로필 업데이트 API 호출
    axios.put('http://localhost:8080/api/users/profile', profile)
      .then(response => {
        setProfile(response.data);
        setEditMode(false);
      })
      .catch(error => console.error(error));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Profile</h1>
      <Form>
        <Form.Group controlId="formUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control 
            type="text" 
            value={profile.username} 
            readOnly={!editMode} 
            name="username"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            type="email" 
            value={profile.email} 
            readOnly={!editMode} 
            name="email"
            onChange={handleChange}
          />
        </Form.Group>
        {editMode ? (
          <Button variant="primary" onClick={handleSave}>Save</Button>
        ) : (
          <Button variant="secondary" onClick={handleEdit}>Edit</Button>
        )}
      </Form>
    </Container>
  );
}

export default ProfilePage;
