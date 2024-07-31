import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Table, Button } from 'react-bootstrap';
import './css/AdminPage.css';

function AdminPage() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/api/admin/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:8080/api/admin/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:8080/api/admin/comments')
      .then(response => setComments(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleDeleteUser = (userId) => {
    axios.delete(`http://localhost:8080/api/admin/users/${userId}`)
      .then(response => {
        setUsers(users.filter(user => user.id !== userId));
      })
      .catch(error => console.error(error));
  };

  const handleDeletePost = (postId) => {
    axios.delete(`http://localhost:8080/api/admin/posts/${postId}`)
      .then(response => {
        setPosts(posts.filter(post => post.id !== postId));
      })
      .catch(error => console.error(error));
  };

  const handleDeleteComment = (commentId) => {
    axios.delete(`http://localhost:8080/api/admin/comments/${commentId}`)
      .then(response => {
        setComments(comments.filter(comment => comment.id !== commentId));
      })
      .catch(error => console.error(error));
  };

  return (
    <Container className="container-main mt-5">
      <h1>Admin Page</h1>

      <h2>Users</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Posts</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map(post => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.author.username}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeletePost(post.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <h2>Comments</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Content</th>
            <th>Author</th>
            <th>Post</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map(comment => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.content}</td>
              <td>{comment.author.username}</td>
              <td>{comment.post.title}</td>
              <td>
                <Button variant="danger" onClick={() => handleDeleteComment(comment.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default AdminPage;
