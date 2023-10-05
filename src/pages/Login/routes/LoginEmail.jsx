import React from 'react';
import '../styles/LoginEmail.scss';
import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';

export function LoginEmail() {
  return (
    <main className="main-login-email">
      <h1 className="title">이메일로 로그인</h1>
      <LoginForm />
      <Link className="email-join" to="/sign-up">
        이메일로 회원가입
      </Link>
    </main>
  );
}
