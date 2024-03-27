import React from 'react';
import { useRecoilValue } from 'recoil';
import { storage } from '../../../utils/storage';
import { userProfileInfoState } from '../recoils/selector';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSectionElement';

export function ProfileSection({ accountname }) {
  const who = storage.getAccountName();
  const userProfile = useRecoilValue(userProfileInfoState(accountname));

  return (
    <section id="profile" className="profile-container">
      <UserInfomation data={userProfile} />
      {accountname === who ? <ButtonsMyProfile /> : <ButtonsYourProfile followState={userProfile.isfollow} userName={accountname} />}
    </section>
  );
}
