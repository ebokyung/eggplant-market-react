import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { UserProfile } from '../pages/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/profile" element={<UserProfile />} />
    </Routes>
  );
}
