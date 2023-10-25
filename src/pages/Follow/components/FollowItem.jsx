import React from 'react';
import { User } from '../../../components/Element/User';
import FollowButton from './FollowButton';

function FollowItem({ user }) {
  const { accountname, image, intro, isfollow, username } = user;

  const UserProp = {
    category: 'follow',
    accountName: accountname,
    userName: username,
    detail: intro,
    profileImg: image,
  };

  return (
    <>
      <User {...UserProp} />
      <FollowButton accountName={accountname} isFollow={isfollow} />
    </>
  );
}

export default FollowItem;
