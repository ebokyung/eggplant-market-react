import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ChatList } from '../pages/ChatList';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/chat" element={<ChatList />} />
    </Routes>
  );
}
