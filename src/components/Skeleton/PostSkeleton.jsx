import React from 'react';
import Skeleton from 'react-loading-skeleton';
import ButtonOption from '../Element/Buttons/ButtonOption';

export default function PostSkeleton() {
  return (
    <section id="post" className="home-post">
      <div className="user-container">
        <div className="profile-img user">
          <Skeleton height="100%" />
        </div>
        <div className="user-info">
          <div className="user-name">
            <Skeleton width={150} />
          </div>
          <div className="user-id before-none">
            <Skeleton width={100} />
          </div>
        </div>
      </div>
      <div className="post-edit">
        <div className="post-text">
          <Skeleton width={300} />
        </div>
        <div className="img-cover">
          <div className="post-img">
            <Skeleton height="100%" />
          </div>
        </div>
        <div className="post-icon">
          <Skeleton width={30} height={20} />
          <Skeleton width={30} height={20} />
        </div>
        <div className="post-date">
          <Skeleton width={91} height={10} />
        </div>
      </div>
      <ButtonOption disabled />
    </section>
  );
}
