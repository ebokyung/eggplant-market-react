import React from 'react';
import { Button } from '../../../../components/Element/Buttons';

export function ButtonsYourProfile({ isFollow }) {
  const onAlert = () => {
    window.alert('서비스 준비 중입니다.');
  };

  return (
    <div className="btn-wrap-your">
      <Button className="btn-chat circle" onClick={onAlert}>
        <span className="a11y-hidden">유저와 채팅하기</span>
      </Button>
      {isFollow ? <Button className="size-m btn-follow">팔로우</Button> : <Button className="size-m btn-follow cancle">언팔로우</Button>}
      <Button className="btn-share circle" onClick={onAlert}>
        <span className="a11y-hidden">해당 프로필 공유하기</span>
      </Button>
    </div>
  );
}
