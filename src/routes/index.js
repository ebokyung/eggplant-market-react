import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Input from '../components/Element/Input/Input';
export default function AppRoutes() {
  const error = true;
  return (
    <Routes>
      <Route
        path="/"
        element={
          <form>
            <Input type="email" label="이메일" required />
            <Input type="password" label="비밀번호" required />
            <Input label="비밀번호" placeholder="hi" hasError={error} />
            <button type="submit">제출</button>
          </form>
        }
      />
    </Routes>
  );
}
