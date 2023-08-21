import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TestComponent from '../pages';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TestComponent />} />
    </Routes>
  );
}
