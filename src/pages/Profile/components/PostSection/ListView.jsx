import React from 'react';
import { Post } from '../../../../components/Element/Post/Post';

export function ListView({ post }) {
  return (
    <ul className="post-list">
      {post?.map(item => {
        return (
          <li key={item.id}>
            <Post post={item} />
          </li>
        );
      })}
    </ul>
  );
}
