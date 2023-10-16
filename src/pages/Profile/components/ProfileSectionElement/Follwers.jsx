import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { followerCnt } from '../../recoils/atoms';

export function Followers() {
  const followerCount = useRecoilValue(followerCnt);

  return (
    <Link className="follow-wrap" to="/follower">
      <span className="a11y-hidden">유저의 팔로워 목록 보기</span>
      <p>followers</p>
      <strong className="follower">
        {followerCount}
        <span className="a11y-hidden">명</span>
      </strong>
    </Link>
  );
}
