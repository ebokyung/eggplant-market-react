import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './style/User.module.scss';
import { ProfileImage } from './ProfileImage';

// ! 리뷰 받을 부분 (Name, SubInfo)

// username 컴포넌트
function Name({ value, as = 'p' }) {
  // default : p
  const Component = as;
  return <Component className={styles.UserName}>{value}</Component>;
}

function SubInfo({ value, type }) {
  // type에 따라 classname 조정
  const className = classNames(styles.SubInfoFont, 'ellipsis', {
    [styles.UserId]: type === 'accountname',
    [styles.UserIntro]: type === 'intro',
    [styles.ChatContents]: type === 'chat',
  });

  return <p className={className}>{value}</p>;
}

// User Container
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

//! Usage : 우선 User파일에 생성해두었습니다
export function PostUser({ author }) {
  const { username, accountname, image } = author;
  return (
    <User accountname={accountname}>
      <User.ProfileImage src={image} size="Regular" />
      <div className={styles.UserInfo}>
        <User.Name value={username} as="h3" />
        <User.SubInfo value={accountname} type="accountname" />
      </div>
    </User>
  );
}

// 프로필 링크 x
export function ChatUser({ author }) {
  const { username, image, contents } = author;
  return (
    <div className={styles.UserContainer}>
      <User.ProfileImage src={image} size="Regular" />
      <div className={styles.UserInfo}>
        <User.Name value={username} type="chat" />
        <User.SubInfo value={contents} type="chat" />
      </div>
    </div>
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
        <User.Name value={username} as="strong" />
        <User.SubInfo value={intro} type="intro" />
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
        <User.Name value={username} as="strong" />
      </div>
    </User>
  );
}
