import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import { defaultAxios } from '../../../libs/api/axios';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import FollowItem from './FollowItem';
import SkeletonFollowItem from './SkeletonFollowItem';
import Spinner from '../../../components/Element/Spinner/Spinner';
import '../style/Follow.scss';

const VIEW_COUNT = 11;

export default function FollowList({ isFollower }) {
  const [searchParams] = useSearchParams();
  const accountName = searchParams.get('accountName');

  const fetchFollow = useCallback(async page => {
    return defaultAxios.get(`/profile/${accountName}/${isFollower ? 'follower' : 'following'}?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  });

  const { data, fetchStatus } = useInfiniteScroll(fetchFollow);

  return (
    <ul className="follow-list">
      {fetchStatus.isLoading ? (
        <SkeletonFollowItem />
      ) : (
        <>
          {data.map(item => (
            <li key={item._id} className="follow-item">
              <FollowItem user={item} />
            </li>
          ))}
          {fetchStatus.isFetching && <Spinner />}
        </>
      )}
    </ul>
  );
}
