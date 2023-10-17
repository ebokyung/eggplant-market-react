import React, { useState } from 'react';
import { Button } from '../../../components/Element/Buttons';
import { postFollowAPI, postUnfollowAPI } from '../api/index';

function FollowButton({ accountName, isFollow }) {
  const [following, setIsFollowing] = useState(isFollow);

  const buttonClasses = following ? 'size-s btn-follow cancle' : 'size-s btn-follow';
  const buttonText = following ? '팔로잉' : '팔로우';
  const hiddenText = following ? '취소' : '하기';

  async function handleFollow() {
    isFollow ? await postUnfollowAPI(accountName) : await postFollowAPI(accountName);
    setIsFollowing(prevState => !prevState);
  }

  return (
    <Button className={buttonClasses} onClick={() => handleFollow()}>
      {buttonText}
      <span className="a11y-hidden">{hiddenText}</span>
    </Button>
  );
}

export default FollowButton;
