import React from 'react';
import { followers, followings } from '../../../libs/dummy/myData';
import FollowItem from './FollowItem';

export function FollowList({ isFollower }) {
  // get follower or following
  const data = isFollower ? followers : followings;

  return (
    <ul className="follow-list">
      {data.map(followitem => (
        <li key={followitem._id} className="follow-item">
          <FollowItem user={followitem} />
        </li>
      ))}
    </ul>
  );
}
