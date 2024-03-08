import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowItem from '../components/FollowItem';
import '../style/Follow.scss';
import SkeletonFollowItem from '../components/SkeletonFollowItem';
import { useScroll } from '../../../hooks/useScroll';
import { Meta } from '../../../libs/Meta';
import { defaultAxios } from '../../../libs/api/axios';

export default function Follow() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');
  const accountName = new URLSearchParams(location.search).get('accountName');

  const VIEW_COUNT = 11;
  const getData = async page => {
    return defaultAxios.get(`/profile/${accountName}/${isFollower ? 'follower' : 'following'}?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  };

  useScroll({ getData, setData, setIsLoading });

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
