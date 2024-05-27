import React from 'react';
// import { User } from '../../../components/Element/User';
import FollowButton from './FollowButton';
import { FollowUser } from '../../../components/Element/User';

function FollowItem({ user }) {
  const { accountname, isfollow } = user;

  // const UserProp = {
  //   category: 'follow',
  //   accountName: accountname,
  //   userName: username,
  //   detail: intro,
  //   profileImg: image,
  // };

  return (
    <>
      <FollowUser author={user} />
      <FollowButton accountName={accountname} isFollow={isfollow} />
    </>
  );
}

export default React.memo(FollowItem);
