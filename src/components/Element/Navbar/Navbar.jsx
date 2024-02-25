import React, { useState } from 'react';
import './Navbar.scss';
import { Link, useLocation } from 'react-router-dom';
import { storage } from '../../../utils/storage';
import { ButtonOption, ButtonSearch } from '../Buttons';

function Navbar() {
  const location = useLocation();
  const [curPage, setCurPage] = useState(location.pathname);
  const accountName = storage.getAccountName();
  const isMyPage = new URLSearchParams(location.search).get('accountName') === accountName;

  return (
    <nav className="tab-menu">
      <p className="a11y-hidden">메뉴</p>
      <ul className="tab-item-list">
        <li className="tab-item-home">
          <Link id="footer" to="/home" onClick={() => setCurPage('/home')} className={curPage === '/home' ? 'here' : undefined}>
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
        <li className="tab-item-profile">
          <Link to={`/profile?accountName=${accountName}`} onClick={() => setCurPage('/profile')} className={curPage === '/profile' && isMyPage ? 'here' : undefined}>
            프로필<span className="a11y-hidden">로 이동</span>
          </Link>
        </li>
        <li className="tab-item-search">
          <ButtonSearch isViewText curPage={curPage} />
        </li>
        <li className="tab-item-more">
          <ButtonOption isViewText />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
