import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Splash, Login } from '../pages';
import { Home } from '../pages/Home';
import { ChatList } from '../pages/ChatList';
import { ChatRoom } from '../pages/ChatRoom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<Error />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}
