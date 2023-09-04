import React from 'react';
import basicProfile from '../../../assets/basic-profile.png';
import contrastProfile from '../../../assets/basic-profile-hc.png';
import './style/ProfileImg.scss';

function returnSize(category) {
  switch (category) {
    case 'post':
    case 'chat':
      return 'user';
    case 'search':
    case 'follow':
      return 'item';
    case 'comment':
      return 'comment';
    default:
      return 'user';
  }
}

// 이미지 처리 함수 추가 필요
export function ProfileImg({ profileImg, category, constrast = false }) {
  let image;

  if (!profileImg) {
    image = !constrast ? basicProfile : contrastProfile;
  }

  return (
    <div className={`profile-img ${returnSize(category)}`}>
      <img src={profileImg || image} alt="" />
    </div>
  );
}
