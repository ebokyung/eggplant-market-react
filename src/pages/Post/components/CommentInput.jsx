/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { postCommentAPI } from '../api';
import '../style/CommentInput.scss';
import { ProfileImage } from '../../../components/Element/User/ProfileImage';

export function CommentInput({ postId, setIsLoading, userImg }) {
  const [inpValue, setInpValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleClick = async e => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    try {
      const comment = {
        comment: {
          content: inpValue,
        },
      };
      await postCommentAPI(postId, comment);
      setIsLoading(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="footer" className="comment-section">
      <h2 className="a11y-hidden">댓글 입력하기</h2>
      <form onSubmit={e => handleClick(e)} action="">
        <label htmlFor="commemt-input" className="a11y-hidden">
          게시물에 대한 댓글 입력
        </label>
        <input value={inpValue} onChange={e => setInpValue(e.target.value)} type="text" id="commemt-input" placeholder="댓글 입력하기..." />
        <ProfileImage src={userImg} size="Small" />
        <button type="submit" className="btn-comment" disabled={!inpValue}>
          게시
        </button>
      </form>
    </footer>
  );
}
