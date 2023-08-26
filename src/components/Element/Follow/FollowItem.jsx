import React from 'react';
import { User } from '../User';
import './Follow.scss';
import FollowButton from './FollowButton';

function FollowItem({ user }) {
  const { _id, accountname, image, intro, isfollow, username } = user || {
    accountname: 'weniv_rho',
    image: 'https://api.mandarin.weniv.co.kr/1687277469603.png',
    intro: '안녕하세요 저는 태희입니다.^^( ◡̉̈ )',
    isfollow: true,
    username: '노태희',
  };

  return (
    <li key={_id} className="follow-item">
      <User accountName={accountname} userName={username} detail={intro} profileImg={image} />
      <FollowButton isFollow={isfollow} />
    </li>
  );
}

export default FollowItem;
