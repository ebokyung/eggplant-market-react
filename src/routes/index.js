import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ChatRoom } from '../pages/ChatRoom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}
