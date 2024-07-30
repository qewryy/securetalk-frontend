import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Form, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './css/EditPost.css';

function EditPost() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${id}`)
      .then(response => {
        const post = response.data;
        setTitle(post.title);
        setAuthor(post.author);
        setContent(post.content);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('author', author);
    formData.append('content', content);
    if (file) {
      formData.append('file', file);
    }

    axios.put(`http://localhost:8080/api/posts/${id}`, formData)
      .then(response => {
        navigate(`/posts/${id}`);
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Edit Post</h1>
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
          Update
        </Button>
        {' '}
        <Button variant="secondary" className="mt-3" onClick={() => navigate(`/posts/${id}`)}>
          Cancel
        </Button>
      </Form>
    </Container>
  );
}

export default EditPost;
