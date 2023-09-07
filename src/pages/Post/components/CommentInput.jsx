import React from 'react';
import { ProfileImg } from '../../../components/Element/User';
import '../style/CommentInput.scss';

export function CommentInput({ userImg }) {
  return (
    <footer className="comment-section">
      <h2 className="a11y-hidden">댓글 입력하기</h2>
      {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
      <label htmlFor="commemt-input" className="a11y-hidden">
        게시물에 대한 댓글 입력
      </label>
      <input type="text" id="commemt-input" placeholder="댓글 입력하기..." />
      <ProfileImg profileImg={userImg} category="comment" />
      <button type="submit" className="btn-comment" disabled>
        게시
      </button>
    </footer>
  );
}
