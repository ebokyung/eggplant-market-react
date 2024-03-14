import React from 'react';
import { storage } from '../../../utils/storage';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSectionElement';

export function ProfileSection({ fetchData, accountname }) {
  const who = storage.getAccountName();
  const userProfile = fetchData.read().profile;

  return (
    <section id="profile" className="profile-container">
      <UserInfomation data={userProfile} />
      {accountname === who ? <ButtonsMyProfile /> : <ButtonsYourProfile followState={userProfile.isfollow} userName={accountname} />}
    </section>
  );
}
