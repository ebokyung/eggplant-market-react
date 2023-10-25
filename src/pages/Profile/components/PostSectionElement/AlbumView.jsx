import React from 'react';
import { Link } from 'react-router-dom';

export function AlbumView({ post }) {
  return (
    <ul className="post-album">
      {post?.map(item => {
        return (
          item.image && (
            <li key={item.id} className={`post-album-item ${item.image.split(',')[1] ? 'multiple' : ''}`}>
              <Link to={`/post?postId=${item.id}`}>
                <img src={`https://api.mandarin.weniv.co.kr/${item.image.split(',')[0]}`} alt="" />
              </Link>
            </li>
          )
        );
      })}
    </ul>
  );
}
