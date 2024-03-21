import React, { createElement } from 'react';
import { Link } from 'react-router-dom';

export function ProfileImage({ src, size }) {
  // 이미지 처리 들어감

  return (
    <div className={`profile-img ${size}`}>
      <img src={src} alt="" />
    </div>
  );
}

function Name({ value, tagName }) {
  return createElement(tagName, { className: 'user-name' }, value);
}

function SubInfo({ value, type }) {
  let className = '';

  switch (type) {
    case 'accountname':
      className = 'user-id';
      break;
    case 'intro':
      className = 'user-intro ellipsis';
      break;
    case 'chat':
      className = 'chat-comment ellipsis';
      break;
    default:
      break;
  }

  return createElement('p', { className }, value);
}

export function User({ children, accountname }) {
  return (
    <Link className="user-info-container" to={`/profile?accountName=${accountname}`}>
      {children}
    </Link>
  );
}

User.Name = Name;
User.SubInfo = SubInfo;
User.ProfileImage = ProfileImage;

//! Usage

export function PostUser({ author }) {
  const { username, accountname, image } = author;
  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="regular" />
      <div className="user-info">
        <User.Name value={username} tagName="p" />
        <User.SubInfo value={accountname} type="accountname" />
      </div>
    </User>
  );
}

export function ChatUser({ author }) {
  const { username, accountname, image } = author;
  const contents = '';
  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="regular" />
      <div className="user-info">
        <User.Name value={username} tagName="p" />
        <User.SubInfo value={contents} type="chat" />
      </div>
    </User>
  );
}

// highlight
export function SearchUser({ author }) {
  const { username, accountname, image } = author;

  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="medium" />
      <div className="user-info">
        <User.Name value={username} tagName="h3" />
        <User.SubInfo value={accountname} type="accountname" />
      </div>
    </User>
  );
}

export function FollowUser({ author }) {
  const { username, accountname, image, intro } = author;

  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="medium" />
      <div className="user-info">
        <User.Name value={username} tagName="strong" />
        <User.SubInfo value={intro} type="intro" />
      </div>
    </User>
  );
}

export function CommentUser({ author }) {
  const { username, accountname, image } = author;

  <User accountname={accountname}>
    <User.ProfileImage src={image} size="small" />
    <div className="user-info">
      <User.Name value={username} tagName="strong" />
    </div>
  </User>;
}
