import React, { useState } from 'react';
import { Button } from '../Buttons';

function FollowButton({ isFollow }) {
  const [following, setIsFollowing] = useState(isFollow);

  const buttonClasses = following ? 'size-s btn-follow cancle' : 'size-s btn-follow';

  function handleFollow() {
    setIsFollowing(prevState => !prevState);
    // e.target.classList.toggle('cancle', following);
  }

  return (
    <Button className={buttonClasses} onClick={() => handleFollow()}>
      {/* {following ? `팔로잉` : `팔로우`} */}
      {following ? <span className="a11y-hidden">취소</span> : <span className="a11y-hidden">하기</span>}
    </Button>
  );
}

export default FollowButton;
