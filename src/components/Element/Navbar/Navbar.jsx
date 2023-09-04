import React from 'react';
import './Navbar.scss';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="tab-menu">
      <p className="a11y-hidden">하단 탭 메뉴</p>
      <ul className="tab-item-list">
        <li className="tab-item-home">
          <Link to="/home">
            홈<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-chat">
          <Link to="/chat">
            채팅<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-follow">
          <Link to="/post-upload">
            게시물 작성<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-more">
          <Link to="/profile">
            프로필<span className="a11y-hidden">로 이동</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
