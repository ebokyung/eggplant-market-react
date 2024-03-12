import React, { useState } from 'react';
import { defaultAxios } from '../../../libs/api/axios';
import { ReactComponent as Heart } from './icon-heart.svg';

function dislike() {}

function useLike({ postId, hearted, heartCount }) {
  const [isHeart, setIsHeart] = useState(hearted);
  const [heartCnt, setHeartCnt] = useState(heartCount);

  // 기능 분리 필요
  const toggleHeart = async () => {
    const reqUrl = isHeart ? `/post/${postId}/unheart` : `/post/${postId}/heart`;
    const method = isHeart ? 'delete' : 'post';
    try {
      const {
        data: { post },
      } = await defaultAxios[method](reqUrl);
      setIsHeart(!isHeart);
      setHeartCnt(post.heartCount);
    } catch (error) {
      // 404인 경우만 존재함
      console.error('Error:', error);
    }
  };

  if (isHeart) return {};

  return { isHeart, heartCnt, toggleHeart };
}

function ButtonLike({ postId, hearted, heartCount }) {
  const { isHeart, heartCnt, toggleHeart } = useLike({ postId, hearted, heartCount });

  return (
    <button type="button" className={`btn-like${isHeart ? ' like' : ''}`} onClick={toggleHeart}>
      <Heart />
      <span className="cnt">{heartCnt}</span>
    </button>
  );
}

export default ButtonLike;
