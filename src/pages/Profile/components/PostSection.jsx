import React, { useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, ListView, AlbumView } from './PostSection/index';

export function PostSection({ data }) {
  const [listViewOn, isListViewOn] = useState(true);

  return (
    <section className="post-container">
      <PostViewTab listViewOn={listViewOn} isListViewOn={isListViewOn} />
      <section className="post-sec">{listViewOn ? <ListView post={data} /> : <AlbumView post={data} />}</section>
    </section>
  );
}
