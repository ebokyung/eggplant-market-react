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

const useProfileImage = profileImage => {
  const theme = useRecoilValue(themeAtom);

  const lightProfileUrl = 'https://api.mandarin.weniv.co.kr/1687141773353.png';
  const hcProfileUrl = 'https://api.mandarin.weniv.co.kr/1687827693364.png';

  let imgsrc;

  if (profileImage instanceof File) imgsrc = URL.createObjectURL(profileImage);
  else if (profileImage === lightProfileUrl || profileImage === hcProfileUrl) imgsrc = checkImageUrl('Ellipse', 'profile');
  else imgsrc = checkImageUrl(profileImage, 'profile');

  useEffect(() => {
    imgsrc = theme === 'light' ? defaultProfile : hcProfile;
  }, [theme]);

  return imgsrc;
};

// 이미지 처리 함수 추가 필요
export function ProfileImg({ profileImage = '', category }) {
  const imgsrc = useProfileImage(profileImage);

  return (
    <div className={`profile-img ${returnSize(category)}`}>
      <img src={imgsrc} alt="" />
    </div>
  );
}
