import React, { useEffect } from 'react';
import './style/ProfileImg.scss';
import { useRecoilValue } from 'recoil';
import { checkImageUrl } from '../../../utils/imageUrlProcess';
import { themeAtom } from '../../../recoil/theme/atoms';
import defaultProfile from '../../../assets/basic-profile.png';
import hcProfile from '../../../assets/basic-profile-hc.png';

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
  const theme = useRecoilValue(themeAtom);
  const lightProfileUrl = 'https://api.mandarin.weniv.co.kr/1687141773353.png';
  const hcProfileUrl = 'https://api.mandarin.weniv.co.kr/1687827693364.png';
  let imgsrc;
  if (profileImg instanceof File) imgsrc = URL.createObjectURL(profileImg);
  else if (profileImg === lightProfileUrl || profileImg === hcProfileUrl) imgsrc = checkImageUrl('Ellipse', 'profile');
  else imgsrc = checkImageUrl(profileImg, 'profile');

  useEffect(() => {
    imgsrc = theme === 'light' ? defaultProfile : hcProfile;
  }, [theme]);

  return (
    <div className={`profile-img ${returnSize(category)}`}>
      <img src={imgsrc} alt="" />
    </div>
  );
}
