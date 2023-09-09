import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Splash } from '../pages';
import { LoginEmail } from '../pages/Login';
import { Home } from '../pages/Home';
import { ChatList } from '../pages/ChatList';
import { ChatRoom } from '../pages/ChatRoom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<Error />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login-email" element={<LoginEmail />} />
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}
