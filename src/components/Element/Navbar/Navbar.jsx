import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const [curPage, setCurPage] = useState(location.pathname);

  return (
    <nav className="tab-menu">
      <p className="a11y-hidden">하단 탭 메뉴</p>
      <ul className="tab-item-list">
        <li className="tab-item-home">
          <Link to="/home" onClick={() => setCurPage('/home')} className={curPage === '/home' ? 'here' : undefined}>
            홈<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-chat">
          <Link to="/chat" onClick={() => setCurPage('/chat')} className={curPage === '/chat' ? 'here' : undefined}>
            채팅<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-follow">
          <Link to="/posting" onClick={() => setCurPage('/posting')} className={curPage === '/posting' ? 'here' : undefined}>
            게시물 작성<span className="a11y-hidden">으로 이동</span>
          </Link>
        </li>
        <li className="tab-item-more">
          <Link to="/profile" onClick={() => setCurPage('/profile')} className={curPage === '/profile' ? 'here' : undefined}>
            프로필<span className="a11y-hidden">로 이동</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
