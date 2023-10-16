import React from 'react';
import './style/ProfileImg.scss';
import { checkImageUrl } from '../../../utils/imageUrlProcess';

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
      return 'main';
  }
}

// 이미지 처리 함수 추가 필요
export function ProfileImg({ profileImg = '', category }) {
  return (
    <div className={`profile-img ${returnSize(category)}`}>
      <img src={checkImageUrl(profileImg, 'profile')} alt="" />
    </div>
  );
}
