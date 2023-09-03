import React from 'react';
import ProfileImg from '../../../../components/Element/User/ProfileImg';

export function UserInfomation() {
  return (
    <header className="profile-header">
      <h2 className="a11y-hidden">사용자 정보</h2>
      <ProfileImg />
      <strong className="profile-name">
        <span className="a11y-hidden">사용자 이름:</span>
      </strong>
      <strong className="profile-id">
        <span className="a11y-hidden">사용자 아이디:</span>
      </strong>
      <p className="profile-intro">
        <span className="a11y-hidden">사용자 소개:</span>소개를 입력해주세요!
      </p>
      <a className="follow-wrap" href="./profile_follower.html">
        <span className="a11y-hidden">유저의 팔로워 목록 링크</span>
        <p>followers</p>
        <strong className="follower">
          0<span className="a11y-hidden">명</span>
        </strong>
      </a>
      <a className="follow-wrap" href="./profile_following.html">
        <span className="a11y-hidden">유저의 팔로잉 목록 링크</span>
        <p>followings</p>
        <strong className="following">
          0<span className="a11y-hidden">명</span>
        </strong>
      </a>
    </header>
  );
}
