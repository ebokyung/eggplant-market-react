import React, { useState, useEffect } from 'react';
import { storage } from '../../../utils/storage';
import '../styles/ProfileSection.scss';
import { UserInfomation, ButtonsYourProfile, ButtonsMyProfile } from './ProfileSectionElement';
import { getProfileAPI } from '../api';

export function ProfileSection({ accountname }) {
  const who = storage.getAccountName();
  const [userProfile, setUserProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userProfileData = await getProfileAPI(accountname);
      setUserProfile(() => userProfileData.profile);
      setIsLoading(false);
    })();
  }, [accountname]);

  if (isLoading) return 'loading profile';

  return (
    <section id="profile" className="profile-container">
      <UserInfomation data={userProfile} />
      {accountname === who ? <ButtonsMyProfile /> : <ButtonsYourProfile followState={userProfile.isfollow} userName={accountname} />}
    </section>
  );
}
