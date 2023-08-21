/* eslint-disable import/no-unresolved */
import React from 'react';
import basicProfile from '../../../assets/basic-profile.png';
import contrastProfile from '../../../assets/basic-profile-hc.png';
import './style/ProfileImg.scss';

function ProfileImg({ profileImg, size, constrast = false }) {
  let image;

  if (!profileImg) {
    image = !constrast ? basicProfile : contrastProfile;
  }

  return (
    <div className={`profile-img ${size}`}>
      <img src={profileImg || image} alt="" />
    </div>
  );
}

export default ProfileImg;
