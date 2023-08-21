import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from './ProfileImg';
import UserInfo from './UserInfo';
import './style/User.scss';

function returnSize(category) {
  switch (category) {
    case 'post':
    case 'chat':
      return 'user';
    case 'search':
    case 'follow':
      return 'item';
    case 'comment':
      return 'comment';
    default:
      return 'user';
  }
}

export default function User({ category, userName, detail, children }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link className="user-container" to="#">
      <ProfileImg size={returnSize(category)} />
      <UserInfo category={category} userName={userName} detail={detail} />
      {children}
    </Link>
  );
}

// class : user-layout 레이아웃 잡는용
// primary : home post, profile post, search
// secondary : follower, following
// tertiary : chat

/*
// chat
<a class="user-chat-content new-chat" href="/html/chat_room">
    <div class="user-img img-cover">
        <img class="profile-img" src="../assets/basic-profile.png" alt="">
        <span class="profile-dot"></span>
    </div>
    <div class="user-info">
        <p class="user-name">애월읍 위니브 가지밭</p>
        <p class="chat-content ellipsis">이번에 정정 언제하멘마씸?</p>
    </div>
    <p class="chat-date">2023.06.23</p>
</a>

// home post
<div class="user-follow">
    <a class="profile-img img-cover" href="./profile_info.html?accountName=oxxunnnn21">
        <span class="a11y-hidden">사용자의 프로필 보기</span>
        <img id="profile-image" src="https://api.mandarin.weniv.co.kr/1692533087329.png" alt="">
    </a>
    <a class="user-info" href="./profile_info.html?accountName=oxxunnnn21">
        <p class="user-name">가은</p>
        <p class="user-id">oxxunnnn21</p>
    </a>
</div>


//p profile post

<div class="user-follow">
  <div class="profile-img img-cover">
    <img src="https://api.mandarin.weniv.co.kr/1690528728571.jpg">
  </div>
  <div class="user-info">
    <p class="user-name">박재영!</p>
    <p class="user-id">jyp0308</p>
  </div>
</div>

// follower
<li class="follow-item">
  <a class="user-img img-cover" href="./profile_info.html?accountName=oxxunnnn21">
    <span class="a11y-hidden">가은의 프로필 보기</span>
    <img src="https://api.mandarin.weniv.co.kr/1692533087329.png" alt="">
  </a>
  <div class="user-info" style="width: calc(100% - 150px);">
    <strong class="user-name">
      <a href="./profile_info.html?accountName=oxxunnnn21">
        가은<span class="a11y-hidden">의 프로필 보기</span>
      </a>
    </strong>
    <p class="user-intro ellipsis">메렁</p>
  </div>
  <button class="btn-follow opposite">팔로잉<span class="a11y-hidden">취소</span>
  </button>
  <button class="btn-follow-cancle" style="width: 20px;" disabled="">삭제<span class="a11y-hidden">하기</span>
  </button>
</li>

// 검색
<article class="user-follow">
  <a class="profile-img img-cover" href="./profile_info.html?accountName=sa22212">
    <span class="a11y-hidden">${userData[i].username}의 프로필 보기</span>
    <img id="profile-image" src="https://api.mandarin.weniv.co.kr/1687141773353.png" alt="">
  </a>
  <a class="user-info" href="./profile_info.html?accountName=sa22212"><h3 class="user-name">213123<strong>aaa</strong>a</h3>
    <span class="a11y-hidden">의 프로필 보기</span>
    <p class="user-id">sa22212</p>
  </a>
</article>

*/
