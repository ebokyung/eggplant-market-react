import React, { useEffect } from 'react';
import './style/ProfileImg.scss';
import { useRecoilValue } from 'recoil';
import { getImage } from '../../../utils/imageUrlProcess';
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

  let imgsrc;

  if (profileImage instanceof File) {
    imgsrc = URL.createObjectURL(profileImage);
    return imgsrc; // ?
  }
  imgsrc = getImage({ img: profileImage, type: 'profile' });

  useEffect(() => {
    if (imgsrc === defaultProfile || imgsrc === hcProfile) {
      imgsrc = theme === 'light' ? defaultProfile : hcProfile;
    }
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
