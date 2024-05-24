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
    const res = await defaultAxios.get(`/post/${accountname}/userpost?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
    return res.data.post;
  });

  const { data: userPost, fetchStatus } = useInfiniteScroll(fetchUserPosts);

  if (fetchStatus.isLoading) return <SkeletonPostSection />;

  return (
    <section id="my-post" className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      {userPost?.length ? (
        <>
          <section className="post-sec">{islistViewOn ? <ListView post={userPost} /> : <AlbumView post={userPost} />}</section>
          {fetchStatus.isFetching && <Spinner />}
        </>
      ) : (
        <div className="null-text" style={{ padding: '3rem' }}>
          게시글이 없어요.
        </div>
      )}
    </section>
  );
}
