import React from 'react';
import { Post } from '../../../../components/Element/Post';

export function ListView({ post }) {
  return (
    <ul className="post-list">
      {post?.map((item, idx) => {
        return (
          <li key={item.id}>
            <Post post={item} idx={idx} />
          </li>
        );
      })}
    </ul>
  );
}
