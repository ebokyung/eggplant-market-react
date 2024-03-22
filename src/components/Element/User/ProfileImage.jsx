import React, { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import styles from './style/ProfileImage.module.scss';
import { getImage } from '../../../utils/imageUrlProcess';
import defaultProfile from '../../../assets/basic-profile.png';
import hcProfile from '../../../assets/basic-profile-hc.png';
import { themeAtom } from '../../../recoil/theme/atoms';

const useProfileImage = profileImage => {
  const theme = useRecoilValue(themeAtom);

  let imgsrc;

  imgsrc = getImage({ img: profileImage, type: 'profile' });

  // 작동 제대로 안하는듯
  useEffect(() => {
    imgsrc = theme === 'light' ? defaultProfile : hcProfile;
  }, [theme]);

  return imgsrc;
};

export function ProfileImage({ src, size = 'Large' }) {
  // 이미지 처리 들어감

  const img = src instanceof File ? URL.createObjectURL(src) : useProfileImage(src);

  return (
    <div className={`${styles.ProfileImage} ${styles[size]}`}>
      <img src={img} alt="" />
    </div>
  );
}
