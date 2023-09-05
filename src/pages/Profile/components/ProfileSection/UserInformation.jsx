import React from 'react';
import { Link } from 'react-router-dom';
import ProfileImg from '../../../../components/Element/User/ProfileImg';

export function UserInfomation({ data }) {
  const { username, accountname, intro, followerCount, followingCount } = data;
  return (
    <header className="profile-header">
      <h2 className="a11y-hidden">사용자 정보</h2>
      <ProfileImg />
      <strong className="profile-name">
        <span className="a11y-hidden">이름:</span>
        {username}
      </strong>
      <strong className="profile-id">
        <span className="a11y-hidden">계정 아이디:</span>
        {accountname}
      </strong>
      <p className="profile-intro">
        <span className="a11y-hidden">소개:</span>
        {intro || '소개를 입력해주세요!'}
      </p>
      <Link className="follow-wrap" to="/follower">
        <span className="a11y-hidden">유저의 팔로워 목록 보기</span>
        <p>followers</p>
        <strong className="follower">
          {followerCount}
          <span className="a11y-hidden">명</span>
        </strong>
      </Link>
      <Link className="follow-wrap" to="/following">
        <span className="a11y-hidden">유저의 팔로잉 목록 보기</span>
        <p>followings</p>
        <strong className="following">
          {followingCount}
          <span className="a11y-hidden">명</span>
        </strong>
      </Link>
    </header>
  );
}
