import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import './css/PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${id}`)
      .then(response => setPost(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/posts/${id}`)
      .then(response => {
        navigate('/posts');
      })
      .catch(error => console.error(error));
  };

  if (!post) return <div>Loading...</div>;

  return (
    <Container className="container-main mt-5">
      <h1>{post.title}</h1>
      <p><strong>Author:</strong> {post.author}</p>
      <p><strong>Date:</strong> {new Date(post.date).toLocaleDateString()}</p>
      <p>{post.content}</p>
      {post.file && (
        <div>
          <strong>Attachment:</strong>
          <a href={post.fileUrl} download>{post.fileName}</a>
        </div>
      )}
      <Button variant="secondary" onClick={() => navigate('/posts')}>Back</Button>
      {' '}
      <Button variant="danger" onClick={handleDelete}>Delete</Button>
    </Container>
  );
}

export default PostDetail;
