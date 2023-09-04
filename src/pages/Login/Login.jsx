import React from 'react';
import './Login.scss';
import { Link } from 'react-router-dom';

export function Login() {
  return (
    <div className="login-wrapper">
      <h1 className="a11y-hidden">로그인 화면</h1>
      <div className="background" id="bg-icon" />
      <section className="login">
        <h2 className="a11y-hidden">로그인 선택 섹션</h2>
        <Link className="domain kakao" to="/">
          카카오톡 계정으로 로그인
        </Link>
        <Link className="domain google" to="/">
          구글 계정으로 로그인
        </Link>
        <Link className="domain facebook" to="/">
          페이스북 계정으로 로그인
        </Link>
        <div className="others">
          <Link className="email-login" to="/login-email">
            이메일로 로그인
          </Link>
          <span>|</span>
          <Link className="signin" to="/join-membership">
            회원가입
          </Link>
        </div>
      </section>
    </div>
  );
}
