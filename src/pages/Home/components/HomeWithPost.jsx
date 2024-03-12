import React from 'react';
// import { Post } from '../../../components/Element/Post';
import '../style/Home.scss';
import { Post } from '../../../components/Element/Post/Post';

export default function HomeWithPost({ posts }) {
  return (
    <main id="main" className="main-with-nav main-with-post">
      <ul className="post-list">
        {posts?.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
