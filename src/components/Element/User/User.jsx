import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileImg } from './ProfileImg';
import { UserInfo } from './UserInfo';
import './style/User.scss';

// 링크 분기처리 필요
// 링크 분기 : profile 페이지의 경우 링크 작동 x
// follow의 경우 UserInfo 내부의 p태크는 링크 작동 x
export function User({ category, accountName, userName, detail, profileImg }) {
  // comment-user-info ??
  const linkClassName = category === 'comment' ? 'comment-user-info' : 'user-container';

  return (
    <Link className={linkClassName} to={`/profile?accountName=${accountName}`}>
      <ProfileImg profileImg={profileImg} category={category} />
      <UserInfo category={category} userName={userName} detail={detail || accountName} />
    </Link>
  );
}
