import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { FollowList } from '../components/FollowList';
import '../style/Follow.scss';

export function Follow() {
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');

  return (
    <>
      <Header page="follow" text={isFollower ? 'Follower' : 'Following'} />
      <main>
        <FollowList isFollower={isFollower} />
      </main>
      <Navbar />
    </>
  );
}
