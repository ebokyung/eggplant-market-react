import React from 'react';
import { PostViewTab, ListView, AlbumView } from './PostSection/index';

export function PostSection() {
  return (
    <section id="post" className="post-container">
      <PostViewTab />
      <section className="post-sec">
        <ListView />
        <AlbumView />
      </section>
    </section>
  );
}
