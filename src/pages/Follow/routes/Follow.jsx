import React, { useEffect, useState } from 'react';

import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import Navbar from '../../../components/Element/Navbar/Navbar';
import { getFollowAPI } from '../api';
import FollowItem from '../components/FollowItem';

import '../style/Follow.scss';
import FollowItemSkeleton from '../../../components/Skeleton/FollowItemSkeleton';

export function Follow() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const isFollower = location.pathname.includes('follower');
  const accountName = new URLSearchParams(location.search).get('accountName');

  useEffect(() => {
    (async () => {
      const curr = isFollower ? 'follower' : 'following';
      const response = await getFollowAPI(accountName, curr);
      // 10개만 넘어옴
      setData(response);
      setIsLoading(false);
    })();
  }, []);

  return (
    <>
      <Header page="follow" text={isFollower ? 'Follower' : 'Following'} />
      <main className="main-with-nav">
        <ul className="follow-list">
          {isLoading ? (
            <FollowItemSkeleton />
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
