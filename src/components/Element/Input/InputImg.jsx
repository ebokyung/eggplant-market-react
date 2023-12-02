/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useEffect } from 'react';
import { ProfileImg } from '../User';
import './InputImg.scss';

export function InputImg({ initialImg }) {
  const [profileImg, setProfileImg] = useState(initialImg);

  useEffect(() => {
    return () => {
      if (profileImg !== '' || profileImg !== initialImg) URL.revokeObjectURL(profileImg);
    };
  }, []);

  return (
    <section className="setting-profile-img">
      <h2 className="a11y-hidden">프로필 이미지 설정</h2>
      <ProfileImg profileImg={profileImg} />
      <label
        className="btn-upload"
        htmlFor="btn-upload"
        onChange={e => {
          if (e.target.files.length === 1) setProfileImg(e.target.files[0]);
          else setProfileImg('');
        }}
      >
        <svg className="upload-img" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="" />
          <path
            d="M24.4167 9.75H11.5833C10.5708 9.75 9.75 10.5708 9.75 11.5833V24.4167C9.75 25.4292 10.5708 26.25 11.5833 26.25H24.4167C25.4292 26.25 26.25 25.4292 26.25 24.4167V11.5833C26.25 10.5708 25.4292 9.75 24.4167 9.75Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7915 16.1665C15.5509 16.1665 16.1665 15.5509 16.1665 14.7915C16.1665 14.0321 15.5509 13.4165 14.7915 13.4165C14.0321 13.4165 13.4165 14.0321 13.4165 14.7915C13.4165 15.5509 14.0321 16.1665 14.7915 16.1665Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M26.2502 20.7498L21.6668 16.1665L11.5835 26.2498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <input name="image" type="file" id="btn-upload" className="btn-upload" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" />
      </label>
    </section>
  );
}
