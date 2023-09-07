import React from 'react';
import { Post } from '../../../components/Element/Post';

export function HomeWithPost({ data }) {
  const { posts } = data;
  return (
    <main className="main-with-nav main-with-post">
      <ul className="post-list">
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}