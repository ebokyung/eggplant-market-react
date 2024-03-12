import { useState } from 'react';
import { defaultAxios } from '../../../../libs/api/axios';

function useLike({ id, hearted, heartCount }) {
  // 상태 정의
  const [isHeart, setIsHeart] = useState(hearted);
  const [heartCnt, setHeartCnt] = useState(heartCount);

  // 기능 분리 필요
  const toggleHeart = async () => {
    const reqUrl = isHeart ? `/post/${id}/unheart` : `/post/${id}/heart`;
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

  return { isHeart, heartCnt, toggleHeart };
}

export default useLike;
