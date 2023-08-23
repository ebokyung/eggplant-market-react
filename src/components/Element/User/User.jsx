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

// 링크 분기처리 필요
export default function User({ category, accountName, userName, detail, children, profileImg }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <Link className="user-container" to={`./profile_info.html?accountName=${accountName}`}>
      <ProfileImg profileImg={profileImg} size={returnSize(category)} />
      <UserInfo category={category} userName={userName} detail={detail || accountName} />
      {children}
    </Link>
  );
}
