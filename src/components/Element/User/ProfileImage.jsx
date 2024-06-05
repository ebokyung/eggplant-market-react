import React from 'react';
import { useRecoilValue } from 'recoil';
import styles from './style/ProfileImage.module.scss';
import { getImageWithTheme } from '../../../utils/imageUrlProcess';
import { themeAtom } from '../../../recoil/theme/atoms';

export function ProfileImage({ src, size = 'Large' }) {
  const theme = useRecoilValue(themeAtom);

  // 이미지 처리 들어감

  // blob 경우
  // InputImg 에서 받아온 경우 -> 별도의 처리 없이 src 렌더링
  const img = src?.startsWith('blob') ? src : getImageWithTheme({ img: src, type: 'profile', theme });

  return (
    <div className={`${styles.ProfileImage} ${styles[size]}`}>
      <img src={img} alt="" />
    </div>
  );
}
