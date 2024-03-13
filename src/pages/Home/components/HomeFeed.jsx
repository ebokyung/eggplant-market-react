import React from 'react';
import { useScroll } from '../../../hooks/useScroll';
import { defaultAxios } from '../../../libs/api/axios';
import HomeWithPost from './HomeWithPost';
import HomeWithoutPost from './HomeWithoutPost';
import SkeletonHome from './SkeletonHome';
import Spinner from '../../../components/Element/Spinner/Spinner';

const VIEW_COUNT = 6;
const fetchPosts = async page => {
  return defaultAxios.get(`/post/feed?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
};

export default function HomeFeed() {
  const { data: posts, fetchStatus } = useScroll(fetchPosts);

  // eslint-disable-next-line no-nested-ternary
  return fetchStatus.isLoading ? (
    <SkeletonHome />
  ) : posts.length ? (
    <>
      <HomeWithPost posts={posts} />
      {fetchStatus.isFetching && <Spinner />}
    </>
  ) : (
    <HomeWithoutPost />
  );
}
