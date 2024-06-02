import React from 'react';
// import { User } from '../../../components/Element/User';
import { ButtonOptionComment } from '../../../components/Element/Buttons';
import '../style/Comment.scss';
import { displayedAt } from '../../../utils/date';
import { storage } from '../../../utils/storage';
import { CommentUser } from '../../../components/Element/User';

function Comment({ comment }) {
  const { id, author, content, createdAt } = comment;

  return (
    <>
      <div className="div-flex">
        <CommentUser author={author} />
        {/* 날짜 함수 적용 필요 */}
        <span className="comment-time">{displayedAt(createdAt)}</span>
      </div>
      <h3 className="comment-text">{content}</h3>
      <ButtonOptionComment commentid={id} isMyCmt={author.accountname === storage.getAccountName()} />
    </>
  );
}

export default Comment;
