import React from 'react';
import { useMatch } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowList from '../components/FollowList';
import '../style/Follow.scss';
import { Meta } from '../../../libs/Meta';

export default function Follow() {
  const isFollowerPage = useMatch('/follower');

  return (
    <>
      <Meta title={`${isFollowerPage ? '팔로워' : '팔로잉'} 목록`} />
      <Header page="follow" text={isFollowerPage ? 'Follower' : 'Following'} />
      <main className="main-with-nav">
        <FollowList isFollower={isFollowerPage} />
      </main>
      <Navbar />
    </>
  );
}
