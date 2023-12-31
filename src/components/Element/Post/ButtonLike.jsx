import React, { useState } from 'react';
import { defaultAxios } from '../../../libs/api/axios';

function ButtonLike({ postid, hearted, heartCnts }) {
  const [isHeart, setIsHeart] = useState(hearted);
  const [heartCnt, setHeartCnt] = useState(heartCnts);
  // 좋아요 기능 처리용 id

  const toggleHeart = async () => {
    const reqUrl = isHeart ? `/post/${postid}/unheart` : `/post/${postid}/heart`;
    const method = isHeart ? 'delete' : 'post';
    try {
      const {
        data: {
          post: { heartCount },
        },
      } = await defaultAxios[method](reqUrl);
      setIsHeart(!isHeart);
      setHeartCnt(heartCount);
    } catch (error) {
      // 에러 처리 로직 추가
      console.error('Error:', error);
    }
  };

  return (
    <button type="button" className={`btn-like${isHeart ? ' like' : ''}`} onClick={toggleHeart}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="transparent" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.9202 4.01346C16.5204 3.60579 16.0456 3.28239 15.5231 3.06175C15.0006 2.8411 14.4406 2.72754 13.875 2.72754C13.3094 2.72754 12.7494 2.8411 12.2268 3.06175C11.7043 3.28239 11.2296 3.60579 10.8298 4.01346L9.99997 4.85914L9.17017 4.01346C8.36252 3.19037 7.26713 2.72797 6.12495 2.72797C4.98277 2.72797 3.88737 3.19037 3.07973 4.01346C2.27209 4.83655 1.81836 5.9529 1.81836 7.11693C1.81836 8.28095 2.27209 9.3973 3.07973 10.2204L3.90953 11.0661L9.99997 17.273L16.0904 11.0661L16.9202 10.2204C17.3202 9.81291 17.6376 9.32909 17.8541 8.79659C18.0706 8.26409 18.182 7.69333 18.182 7.11693C18.182 6.54052 18.0706 5.96977 17.8541 5.43726C17.6376 4.90476 17.3202 4.42095 16.9202 4.01346Z"
          stroke="#767676"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />{' '}
      </svg>
      <span className="cnt">{heartCnt}</span>
    </button>
  );
}

export default ButtonLike;
