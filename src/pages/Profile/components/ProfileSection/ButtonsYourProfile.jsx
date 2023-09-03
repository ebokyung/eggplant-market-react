import React from 'react';

export function ButtonsYourProfile() {
  return (
    <div className="btn-wrap-your">
      <button className="btn-chat circle" type="button" onClick="location.href = './chat_room.html'">
        <span className="a11y-hidden">유저와 채팅하기</span>
      </button>
      {/* <!-- 팔로우버튼 : 공통 컴퍼넌트 사용 --> */}
      <button type="button" className="size-m btn-follow">
        팔로우
      </button>
      <button type="button" className="size-m btn-follow cancle">
        언팔로우
      </button>
      <button type="button" className="btn-share circle">
        <span className="a11y-hidden">해당 프로필 공유하기</span>
      </button>
    </div>
  );
}
