import React from 'react';
import { User } from '../../../components/Element/User';
import { ButtonOption } from '../../../components/Element/Buttons';
import '../style/Comment.scss';

function Comment({ comment }) {
  const { id, author, content, createdAt } = comment;
  return (
    <>
      <User category="comment" accountName={author.accountname} userName={author.username} profileImg={author.image} />
      {/* 날짜 함수 적용 필요 */}
      <p className="comment-time">{createdAt}</p>
      <h3 className="comment-text">{content}</h3>
      <ButtonOption data-commentid={id} />
    </>
  );
}

export default Comment;
