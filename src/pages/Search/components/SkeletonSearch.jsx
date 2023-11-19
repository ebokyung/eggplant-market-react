import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function SkeletonSearch() {
  return (
    <li>
      <div className="user-container">
        <div className="profile-img item">
          <Skeleton style={{ display: 'block', height: '100%' }} />
        </div>
        <div className="user-info">
          <Skeleton className="user-name" width={250} />
          <Skeleton className="user-id before-none" width={150} />
        </div>
      </div>
    </li>
  );
}
