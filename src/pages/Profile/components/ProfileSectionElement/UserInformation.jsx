import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { followerCnt } from '../../recoils/atoms';
import { ProfileImg } from '../../../../components/Element/User';
import { Followers } from './Follwers';

export function UserInfomation({ data }) {
  const { username, accountname, intro, followerCount, followingCount } = data;
  const setterFollwerCnt = useSetRecoilState(followerCnt);
  useEffect(() => {
    setterFollwerCnt(followerCount);
  }, []);

  return (
    <header className="profile-header">
      <h2 className="a11y-hidden">사용자 정보</h2>
      <ProfileImg />
      <strong className="profile-name">
        <span className="a11y-hidden">이름:</span>
        {username}
      </strong>
      <strong className="profile-id">
        <span className="a11y-hidden">계정 아이디:</span>
        {accountname}
      </strong>
      <p className="profile-intro">
        <span className="a11y-hidden">소개:</span>
        {intro || '소개를 입력해주세요!'}
      </p>
      <Followers accountname={accountname} />
      <Link className="follow-wrap" to={`/following?accountName=${accountname}`}>
        <span className="a11y-hidden">유저의 팔로잉 목록 보기</span>
        <p>followings</p>
        <strong className="following">
          {followingCount}
          <span className="a11y-hidden">명</span>
        </strong>
      </Link>
    </header>
  );
}
