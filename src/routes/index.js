import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Profile />} />
    </Routes>
  );
}
