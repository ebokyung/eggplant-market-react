import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatRoom } from '../pages/ChatRoom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/chat-room" element={<ChatRoom />} />
    </Routes>
  );
}
