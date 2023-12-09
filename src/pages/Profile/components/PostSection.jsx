import React, { useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, AlbumView, ListView } from './PostSectionElement';

export function PostSection({ data }) {
  const [islistViewOn, setIsListViewOn] = useState(true);

  return (
    <section id="post" className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      <section className="post-sec">{islistViewOn ? <ListView post={data} /> : <AlbumView post={data} />}</section>
    </section>
  );
}
