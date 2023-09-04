import React from 'react';
import { Post } from '../../../components/Element/Post';
import styles from '../style/Home.module.scss';

export function HomeWithPost({ data }) {
  const { posts } = data;
  return (
    <main>
      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
