import React from 'react';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSectionElement';

export function ProfileSection({ data }) {
  const who = localStorage.getItem('user-accountname');
  return (
    <section id="profile" className="profile-container">
      <UserInfomation data={data} />
      {data.accountname === who ? <ButtonsMyProfile /> : <ButtonsYourProfile followState={data.isfollow} userName={data.accountname} />}
    </section>
  );
}
