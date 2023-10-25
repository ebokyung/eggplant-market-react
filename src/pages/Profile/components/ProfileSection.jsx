import React from 'react';
import { storage } from '../../../utils/storage';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSectionElement';
storage;

export function ProfileSection({ data }) {
  const who = storage.getAccountName();
  return (
    <section id="profile" className="profile-container">
      <UserInfomation data={data} />
      {data.accountname === who ? <ButtonsMyProfile /> : <ButtonsYourProfile followState={data.isfollow} userName={data.accountname} />}
    </section>
  );
}
