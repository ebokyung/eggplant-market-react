import React, { useCallback, useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, AlbumView, ListView } from './PostSectionElement';
import { useScroll } from '../../../hooks/useScroll';
import { defaultAxios } from '../../../libs/api/axios';

export function PostSection({ accountname }) {
  const [islistViewOn, setIsListViewOn] = useState(true);

  const VIEW_COUNT = 4;
  const fetchUserPosts = useCallback(async page => {
    return defaultAxios.get(`/post/${accountname}/userpost?skip=${page * VIEW_COUNT}&limit=${VIEW_COUNT}`);
  });

  const { data: userPost } = useScroll(fetchUserPosts);

  return (
    <section id="post" className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      <section className="post-sec">{islistViewOn ? <ListView post={userPost} /> : <AlbumView post={userPost} />}</section>
    </section>
  );
}
