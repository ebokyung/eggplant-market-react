import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import SkeletonPost from '../../../components/Skeleton/Post';

export default function SkeletonProfile() {
  return (
    <main className='"main-with-nav main-user-profile'>
      <div className="profile-container">
        <div className="profile-header">
          <div className="setting-profile-img">
            <Skeleton className="profile-img main" circle />
          </div>
          <Skeleton width={220} style={{ marginBottom: '0.625rem' }} />
          <Skeleton width={150} style={{ marginBottom: '0.625rem' }} />
          <Skeleton style={{ marginBottom: '0.625rem' }} />
          <div className="follow-wrap">
            <Skeleton width={40} height={30} />
          </div>
          <Skeleton className="follow-wrap" width={40} height={30} />
        </div>
        <div className="btn-wrap-my">
          <Skeleton width={80} height={34} style={{ borderRadius: 30 }} inline />
          <Skeleton width={80} height={34} style={{ borderRadius: 30 }} inline />
        </div>
      </div>
      <div className="product-container">
        <Skeleton width={80} style={{ margin: '0 0 1rem 1rem' }} />
        <ul className="product-list">
          <li className="product-item">
            <div className="product">
              <Skeleton className="product-img" />
              <Skeleton className="product-name" />
              <Skeleton className="product-price" />
            </div>
          </li>
          <li className="product-item">
            <div className="product">
              <Skeleton className="product-img" />
              <Skeleton className="product-name" />
              <Skeleton className="product-price" />
            </div>
          </li>
        </ul>
      </div>
      <div className="post-container">
        <div className="post-tab">
          <div className="tab-btn-wrap">
            <Skeleton width={26} height={26} style={{ marginRight: 5 }} />
            <Skeleton width={26} height={26} />
          </div>
        </div>
        <div className="post-sec">
          <ul className="post-list">
            <SkeletonPost />
          </ul>
        </div>
      </div>
    </main>
  );
}
