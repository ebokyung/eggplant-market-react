import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowList from '../components/FollowList';
import '../style/Follow.scss';
// import SkeletonFollowItem from '../components/SkeletonFollowItem';
import { Meta } from '../../../libs/Meta';
import withInfiniteScroll from '../../../hocs/withInfiniteScroll';

export default function Follow() {
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');
  const accountName = new URLSearchParams(location.search).get('accountName');

  const VIEW_COUNT = 11;
  const WithInfinityScrollFollowList = withInfiniteScroll(FollowList, `/profile/${accountName}/${isFollower ? 'follower' : 'following'}`, VIEW_COUNT);

  return (
    <>
      <Meta title={`${isFollower ? '팔로워' : '팔로잉'} 목록`} />
      <Header page="follow" text={isFollower ? 'Follower' : 'Following'} />
      <main className="main-with-nav">
        <ul className="follow-list">
          {/* <Suspense fallback={<SkeletonFollowItem />}> */}
          <WithInfinityScrollFollowList />
          {/* </Suspense> */}
        </ul>
      </main>
      <Navbar />
    </>
  );
}
