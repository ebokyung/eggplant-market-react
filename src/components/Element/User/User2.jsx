import React, { createElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './style/User.module.scss';
import { ProfileImage } from './ProfileImage';

function Name({ value, tagName }) {
  return createElement(tagName, { className: styles.UserName }, value);
}

function SubInfo({ value, type }) {
  let className = `${styles.SubInfoFont}`;

  switch (type) {
    case 'accountname':
      className += ` ${styles.UserId}`;
      break;
    case 'intro':
      className += ` ${styles.UserIntro} ellipsis`;
      break;
    case 'chat':
      className = ` ${styles.ChatContents} ellipsis`;
      break;
    default:
      break;
  }

  return createElement('p', { className }, value);
}

export function User({ children, accountname }) {
  return (
    <Link className={styles.UserContainer} to={`/profile?accountName=${accountname}`}>
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
      <User.ProfileImage src={image} size="Regular" />
      <div className={styles.UserInfo}>
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
      <User.ProfileImage src={image} size="Regular" />
      <div className={styles.UserInfo}>
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
      <User.ProfileImage src={image} size="Medium" />
      <div className={styles.UserInfo}>
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
      <User.ProfileImage src={image} size="Medium" />
      <div className={styles.UserInfo}>
        <User.Name value={username} tagName="strong" />
        <User.SubInfo value={intro} type="intro" />
      </div>
    </User>
  );
}

export function CommentUser({ author }) {
  const { username, accountname, image } = author;

  console.log(username, accountname, image);

  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="Small" />
      <div className={styles.UserInfo}>
        <User.Name value={username} tagName="strong" />
      </div>
    </User>
  );
}
