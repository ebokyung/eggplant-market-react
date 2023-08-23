import React from 'react';
import { User } from '../User';
import { ButtonOption } from '../Buttons';
import './Comment.scss';

function Comment() {
  const { id, author, content, createdAt } = {
    author: {
      accountname: '1243gdsaf',
      follower: [],
      followerCount: 0,
      following: [],
      followingCount: 0,
      image: 'https://api.mandarin.weniv.co.kr/1687141773353.png',
      intro: 'weqr',
      isfollow: false,
      username: 'rewq2135',
      _id: '64c36ecbb2cb2056635fba32',
    },
    content: 'ㅁㅁ',
    createdAt: '2023-08-21T14:14:21.999Z',
    id: '64e3713db2cb2056634abeeb',
  };

  return (
    <li key={id} className="comment-item">
      <User category="comment" accountName={author.accountname} userName={author.username} profileImg={author.image} />
      <p className="comment-time">{createdAt}</p>
      <h3 className="comment-text">{content}</h3>
      <ButtonOption data-commentid={id} />
    </li>
  );
}

export default Comment;
