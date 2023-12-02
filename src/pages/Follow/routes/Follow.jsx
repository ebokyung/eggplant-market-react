import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowItem from '../components/FollowItem';
import '../style/Follow.scss';
import SkeletonFollowItem from '../components/SkeletonFollowItem';
import { scrollHook } from '../../../hooks/scroll';
import { Meta } from '../../../libs/Meta';

export default function Follow() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');
  const accountName = new URLSearchParams(location.search).get('accountName');

  const [hasMoreData, setHasMoreData] = useState(true);
  scrollHook({ url: `/profile/${accountName}/${isFollower ? 'follower' : 'following'}`, cnt: 11, setData, setIsLoading, hasMoreData, setHasMoreData });

  return (
    <>
      <Meta title={`${isFollower ? '팔로워' : '팔로잉'} 목록`} />
      <Header page="follow" text={isFollower ? 'Follower' : 'Following'} />
      <main className="main-with-nav">
        <ul className="follow-list">
          {isLoading ? (
            <SkeletonFollowItem />
          ) : (
            data?.map(followitem => (
              <li key={followitem._id} className="follow-item">
                <FollowItem user={followitem} />
              </li>
            ))
          )}
        </ul>
      </main>
      <Navbar />
    </>
  );
}
