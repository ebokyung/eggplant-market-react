/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import './InputImg.scss';
import { ProfileImage } from '../User/ProfileImage';
import { ReactComponent as UploadIconSVG } from './upload_img_icon.svg';
import { useBlob } from '../../../hooks/useBlob';

function useProfileImage(initialImg) {
  const [profileImg, setProfileImg] = useState(initialImg);
  const blobArray = useBlob();

  const handleChange = e => {
    const { files } = e.target;
    if (files.length === 1) {
      const blob = URL.createObjectURL(files[0]);
      setProfileImg(blob);
      blobArray.push(blob);
    } else setProfileImg('');
  };

  return { profileImg, handleChange };
}

export function InputImg({ initialImg }) {
  const { profileImg, handleChange } = useProfileImage(initialImg);

  return (
    <section className="setting-profile-img">
      <h2 className="a11y-hidden">프로필 이미지 설정</h2>
      <ProfileImage src={profileImg} />
      <label className="btn-upload" htmlFor="btn-upload" onChange={handleChange}>
        <UploadIconSVG />
        <input name="image" type="file" id="btn-upload" className="btn-upload" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" />
      </label>
    </section>
  );
}
