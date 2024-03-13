import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowList from '../components/FollowList';
import '../style/Follow.scss';
import { Meta } from '../../../libs/Meta';

export default function Follow() {
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');

  return (
    <>
      <Meta title={`${isFollower ? '팔로워' : '팔로잉'} 목록`} />
      <Header page="follow" text={isFollower ? 'Follower' : 'Following'} />
      <main className="main-with-nav">
        <FollowList isFollower={isFollower} />
      </main>
      <Navbar />
    </>
  );
}
