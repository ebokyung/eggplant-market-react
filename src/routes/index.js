import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error, Splash, Login } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<Error />} />
      <Route path="/splash" element={<Splash />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
