import React, { useState } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './css/PostForm.css';

function PostForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('Current User'); // 예제에서는 고정 값으로 설정
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    formData.append('date', new Date().toISOString());
    if (file) {
      formData.append('file', file);
    }

    axios.post('http://localhost:8080/api/posts', formData)
      .then(response => {
        console.log(response.data);
        navigate('/posts');
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Write a Post</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="Enter title" 
          />
        </Form.Group>
        <Form.Group controlId="formAuthor">
          <Form.Label>Author</Form.Label>
          <Form.Control 
            type="text" 
            value={author} 
            readOnly 
          />
        </Form.Group>
        <Form.Group controlId="formContent">
          <Form.Label>Content</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={5} 
            value={content} 
            onChange={(e) => setContent(e.target.value)} 
            placeholder="Enter content" 
          />
        </Form.Group>
        <Form.Group controlId="formFile">
          <Form.Label>File Attachment</Form.Label>
          <Form.Control 
            type="file" 
            onChange={(e) => setFile(e.target.files[0])} 
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
        {' '}
        <Button variant="secondary" className="mt-3" onClick={() => navigate('/posts')}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default PostForm;
