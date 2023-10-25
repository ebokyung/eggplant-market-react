import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { Button } from '../../../../components/Element/Buttons';
import { postFollowAPI, deleteFollowAPI } from '../../api';
import { followerCnt } from '../../recoils/atoms';

export function ButtonsYourProfile({ followState, userName }) {
  const [isFollow, setIsFollow] = useState(followState);
  const setterFollwerCnt = useSetRecoilState(followerCnt);

  const onAlert = () => {
    window.alert('서비스 준비 중입니다.');
  };

  const doFollow = async () => {
    const result = (await postFollowAPI(userName)).profile;
    setIsFollow(result.isfollow);
    setterFollwerCnt(result.followerCount);
  };

  const doUnfollow = async () => {
    const result = (await deleteFollowAPI(userName)).profile;
    setIsFollow(result.isfollow);
    setterFollwerCnt(result.followerCount);
  };

  return (
    <div className="btn-wrap-your">
      <Button className="btn-chat circle" onClick={onAlert}>
        <span className="a11y-hidden">유저와 채팅하기</span>
      </Button>
      {isFollow ? (
        <Button className="size-m btn-follow cancle" onClick={() => doUnfollow()}>
          언팔로우
        </Button>
      ) : (
        <Button className="size-m btn-follow" onClick={() => doFollow()}>
          팔로우
        </Button>
      )}
      <Button className="btn-share circle" onClick={onAlert}>
        <span className="a11y-hidden">해당 프로필 공유하기</span>
      </Button>
    </div>
  );
}
