import React from 'react';
import SkeletonPost from '../../../components/Skeleton/Post';

export default function SkeletonHome() {
  return (
    <main className="main-with-nav main-with-post">
      <ul className="post-list">
        <li>
          <SkeletonPost />
        </li>
        <li>
          <SkeletonPost />
        </li>
      </ul>
    </main>
  );
}
