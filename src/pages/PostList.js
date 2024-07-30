import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './css/PostList.css';

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDelete = (postId) => {
    axios.delete(`http://localhost:8080/api/posts/${postId}`)
      .then(response => {
        // Refresh posts after deletion
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Community Posts</h1>
      <Button variant="primary" as={Link} to="/posts/new" className="mb-3">Write a Post</Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.title}</td>
              <td>{post.author}</td>
              <td>{new Date(post.date).toLocaleDateString()}</td>
              <td>
                <Button variant="secondary" as={Link} to={`/posts/${post.id}`}>View</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(post.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default PostList;
