import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Error } from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}
