import React from 'react';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSection/index';

export function ProfileSection() {
  return (
    <section id="profile" className="profile-container">
      <UserInfomation />
      <ButtonsYourProfile />
      <ButtonsMyProfile />
    </section>
  );
}
