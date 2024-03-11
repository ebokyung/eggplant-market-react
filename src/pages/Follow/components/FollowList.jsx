import React from 'react';
import FollowItem from './FollowItem';

export default function FollowList({ data }) {
  return data.map(item => (
    <li key={item._id} className="follow-item">
      <FollowItem user={item} />
    </li>
  ));
}
