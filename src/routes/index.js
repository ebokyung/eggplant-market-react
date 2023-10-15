import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Splash } from '../pages';
import { Login, LoginEmail } from '../pages/Login';
import { Home } from '../pages/Home';
import { Search } from '../pages/Search';
import { ChatList } from '../pages/ChatList';
import { ChatRoom } from '../pages/ChatRoom';
import { Product } from '../pages/Product/routes/Product';
import { UserProfile } from '../pages/Profile';
import { Follow } from '../pages/Follow';
import { SignUp } from '../pages/SignUp';
import { PostDetail } from '../pages/Post';
import { Posting } from '../pages/Posting/routes/Posting';
import { EditProfile } from '../pages/EditProfile';

export default function AppRoutes() {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }

  return (
    <Routes>
      <Route path="/error" element={<Error />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-email" element={<LoginEmail />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/home" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat-room" element={<ChatRoom />} />
      <Route path="/profile" element={<UserProfile />} />
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/product" element={<Product />} />
      {['/follower', '/following'].map(path => (
        <Route key={path} path={path} element={<Follow />} />
      ))}
      <Route path="/post" element={<PostDetail />} />
      <Route path="/posting" element={<Posting />} />
    </Routes>
  );
}
