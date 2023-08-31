import React from 'react';
import { Post } from '../../../components/Element/Post';

export function HomeWithPost({ data }) {
  const { posts } = data;
  return (
    <main>
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