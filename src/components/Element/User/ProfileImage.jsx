import React from 'react';
import styles from './style/ProfileImage.module.scss';
import { getImageWithTheme } from '../../../utils/imageUrlProcess';

export function ProfileImage({ src, size = 'Large' }) {
  // 이미지 처리 들어감

  // blob 경우
  // InputImg 에서 받아온 경우 -> 별도의 처리 없이 src 렌더링
  const img = src.startsWith('blob') ? src : getImageWithTheme({ img: src, type: 'profile' });

  return (
    <div className={`${styles.ProfileImage} ${styles[size]}`}>
      <img src={img} alt="" />
    </div>
  );
}
