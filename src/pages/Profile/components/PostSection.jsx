import React, { useState } from 'react';
import '../styles/PostSection.scss';
import { PostViewTab, AlbumView, ListView } from './PostSectionElement';

export function PostSection({ data }) {
  const [islistViewOn, setIsListViewOn] = useState(true);

  return (
    <section id="my-post" className="post-container">
      <PostViewTab islistViewOn={islistViewOn} setIsListViewOn={setIsListViewOn} />
      {data?.length ? (
        <section className="post-sec">{islistViewOn ? <ListView post={data} /> : <AlbumView post={data} />}</section>
      ) : (
        <div className="null-text" style={{ padding: '3rem' }}>
          게시글이 없어요.
        </div>
      )}
    </section>
  );
}
