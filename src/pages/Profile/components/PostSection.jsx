import React, { useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, ListView, AlbumView } from './PostSection/index';

export function PostSection() {
  const [listViewOn, isListViewOn] = useState(true);

  return (
    <section id="post" className="post-container">
      <PostViewTab listViewOn={listViewOn} isListViewOn={isListViewOn} />
      <section className="post-sec">{listViewOn ? <ListView /> : <AlbumView />}</section>
    </section>
  );
}
