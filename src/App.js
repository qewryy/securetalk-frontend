import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PostList from './pages/PostList';
import PostForm from './pages/PostForm';
import PostDetail from './pages/PostDetail';  // PostDetail 컴포넌트 추가
import EditPost from './pages/EditPost';  // EditPost 컴포넌트 추가
import Footer from './components/Footer';
import AppNavbar from './components/Navbar';

function App() {
  return (
    <div>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/new" element={<PostForm />} />
        <Route path="/posts/:id" element={<PostDetail />} />  {/* PostDetail 경로 추가 */}
        <Route path="/posts/:id/edit" element={<EditPost />} />  {/* EditPost 경로 추가 */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
