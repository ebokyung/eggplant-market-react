import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './style/User.module.scss';
import { ProfileImage } from './ProfileImage';

function Name({ value, type }) {
  const tagNames = {
    post: 'p',
    chat: 'p',
    follow: 'strong',
    comment: 'strong',
    search: 'h3',
  };

  const TagName = tagNames[type] || 'p'; // 기본값으로 'p' 설정

  return <TagName className={styles.UserName}>{value}</TagName>;
}

function SubInfo({ value, type }) {
  const className = classNames(styles.SubInfoFont, {
    [styles.UserId]: type === 'accountname',
    [styles.UserIntro]: type === 'intro',
    [styles.ChatContents]: type === 'chat',
    ellipsis: type === 'chat' || type === 'intro', // 조건부로 여러 타입에 적용
  });

  return <p className={className}>{value}</p>;
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
        <User.Name value={username} type="post" />
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
        <User.Name value={username} type="chat" />
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
        <User.Name value={username} type="search" />
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
        <User.Name value={username} type="follow" />
        <User.SubInfo value={intro} type="intro" className="1" />
      </div>
    </User>
  );
}

export function CommentUser({ author }) {
  const { username, accountname, image } = author;

  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="Small" />
      <div className={styles.UserInfo}>
        <User.Name value={username} type="comment" />
      </div>
    </User>
  );
}
