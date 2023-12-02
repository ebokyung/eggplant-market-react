import React from 'react';
import Skeleton from 'react-loading-skeleton';

export default function SkeletonFollowItem() {
  return (
    <li className="follow-item">
      <div className="user-container">
        <div className="profile-img item">
          <Skeleton height="100%" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Skeleton width={150} />
          </div>
          <div className="user-intro">
            <Skeleton width={70} />
          </div>
        </div>
      </div>
      <div className="btn-follow">
        <Skeleton style={{ display: 'block' }} height="100%" />
      </div>
    </li>
  );
}
