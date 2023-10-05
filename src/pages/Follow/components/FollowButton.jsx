import React, { useState } from 'react';
import { Button } from '../../../components/Element/Buttons';

function FollowButton({ isFollow }) {
  const [following, setIsFollowing] = useState(isFollow);

  const buttonClasses = following ? 'size-s btn-follow cancle' : 'size-s btn-follow';
  const buttonText = following ? '팔로잉' : '팔로우';
  const hiddenText = following ? '취소' : '하기';

  function handleFollow() {
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
