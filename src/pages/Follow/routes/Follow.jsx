import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import FollowItem from '../components/FollowItem';
import '../style/Follow.scss';
// import SkeletonFollowItem from '../components/SkeletonFollowItem';
import { Meta } from '../../../libs/Meta';
import withInfiniteScroll from '../../../hocs/withInfinityScroll';

function FollowList({ data }) {
  return data.map(item => (
    <li key={item._id} className="follow-item">
      <FollowItem user={item} />
    </li>
  ));
}

export default function Follow() {
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');
  const accountName = new URLSearchParams(location.search).get('accountName');

  const VIEW_COUNT = 2;
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
