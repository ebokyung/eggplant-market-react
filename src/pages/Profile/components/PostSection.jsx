import React, { useCallback, useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, AlbumView, ListView } from './PostSectionElement';
import { useInfiniteScroll } from '../../../hooks/useInfiniteScroll';
import { defaultAxios } from '../../../libs/api/axios';
import { SkeletonPostSection } from './SkeletonProfile';
import Spinner from '../../../components/Element/Spinner/Spinner';

export function PostSection({ accountname }) {
  const [islistViewOn, setIsListViewOn] = useState(true);

  const VIEW_COUNT = 4;
  const fetchUserPosts = useCallback(async page => {
    return defaultAxios.get(`/post/${accountname}/userpost?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  });

  const { data: userPost, fetchStatus } = useInfiniteScroll(fetchUserPosts);

  if (fetchStatus.isLoading) return <SkeletonPostSection />;

  return (
    <section id="post" className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      <section className="post-sec">{islistViewOn ? <ListView post={userPost} /> : <AlbumView post={userPost} />}</section>
      {fetchStatus.isFetching && <Spinner />}
    </section>
  );
}
