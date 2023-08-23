import React, { useState } from 'react';
import { User } from '../User';
import { Button } from '../Buttons';
import './Follow.scss';

// 버튼 누르면 전부다 리렌더링됨 ㅜㅜ 의존성 문제인가
function FollowingItem() {
  const { _id, accountname, image, intro, isfollow, username } = {
    accountname: 'weniv_rho',
    image: 'https://api.mandarin.weniv.co.kr/1687277469603.png',
    intro: '안녕하세요 저는 태희입니다.^^( ◡̉̈ )',
    isfollow: true,
    username: '노태희',
  };
  const [following, setIsFollowing] = useState(isfollow);

  const buttonClasses = following ? 'size-s btn-follow cancle' : 'size-s btn-follow';

  function handleFollow() {
    setIsFollowing(prevState => !prevState);
    // e.target.classList.toggle('cancle', following);
  }

  return (
    <li key={_id} className="follow-item">
      <User accountName={accountname} userName={username} detail={intro} profileImg={image} />
      <Button className={buttonClasses} onClick={() => handleFollow()}>
        {following ? `팔로잉` : `팔로우`}
        {following ? <span className="a11y-hidden">취소</span> : <span className="a11y-hidden">하기</span>}
      </Button>
    </li>
  );
}

export default FollowingItem;
