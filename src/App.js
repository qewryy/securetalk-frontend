import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from './api/axios';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import PostDetail from './pages/PostDetail';
import EditPost from './pages/EditPost';
import ProfilePage from './pages/ProfilePage';
import ResetPasswordPage from './pages/ResetPasswordPage';
import AdminPage from './pages/AdminPage';
import Footer from './components/Footer';
import AppNavbar from './components/AppNavbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
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
    <div>
      <AppNavbar username={username} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<MainPage username={username} />} />
        <Route path="/login" element={<LoginPage setUsername={setUsername} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/admin" element={<AdminPage />} />  {/* AdminPage 경로 추가 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
