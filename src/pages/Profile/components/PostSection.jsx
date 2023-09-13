import React, { useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, ListView, AlbumView } from './PostSection/index';

export function PostSection({ data }) {
  const [islistViewOn, setIsListViewOn] = useState(true);

  return (
    <section className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      <section className="post-sec">{islistViewOn ? <ListView post={data} /> : <AlbumView post={data} />}</section>
    </section>
  );
}
