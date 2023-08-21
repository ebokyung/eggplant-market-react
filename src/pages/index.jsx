/* eslint-disable react/jsx-props-no-spreading */
// 테스트용 jsx
import React from 'react';
import { Button, ButtonBack, ButtonOption } from '../components/Element/Buttons';
import { User } from '../components/Element/User';

function TestComponent() {
  // const post = {
  //   category: 'post',
  //   userNameContent: '유저이름',
  //   detail: '하단내용',
  // };
  // const search = {
  //   category: 'search',
  //   userNameContent: '유저이름',
  //   detail: '하단내용',
  // };
  // const chat = {
  //   category: 'chat',
  //   userNameContent: '유저이름',
  //   detail: '하단내용',
  // };
  // const following = {
  //   category: 'follow',
  //   userNameContent: '유저이름',
  //   detail: '하단내용',
  // };
  return (
    <>
      <ButtonBack />
      <ButtonOption />
      <hr />
      <Button className="size-l">버튼</Button>
      <Button className="size-m">버튼</Button>
      <Button className="size-ms">버튼</Button>
      <Button className="size-s">버튼</Button>
      <Button className="size-l" disabled>
        버튼
      </Button>
      <Button className="size-m" disabled>
        버튼
      </Button>
      <Button className="size-ms" disabled>
        버튼
      </Button>
      <Button className="size-s" disabled>
        버튼
      </Button>
      <Button className="size-l cancle">버튼</Button>
      <Button className="size-m cancle">버튼</Button>
      <Button className="size-ms cancle">버튼</Button>
      <Button className="size-s cancle">버튼</Button>
      <hr />
      {/* <ProfileImg size="comment" />
      <ProfileImg size="user" />
      <ProfileImg size="item" />
      <ProfileImg size="main" /> */}
      {/* contrast 임시, 나중에 localStorage랑 연결해서 수정할거임 */}
      {/* <ProfileImg size="comment" constrast />
      <ProfileImg size="user" constrast />
      <ProfileImg size="item" constrast />
      <ProfileImg size="main" constrast /> */}
      <hr />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      {/* <UserInfo {...post} />
      <UserInfo {...search} />
      <UserInfo {...chat} />
      <UserInfo {...following} /> */}
      <User category="post" userName="박재영" detail="아이디" />
      <User category="search" userName="박재영" detail="아이디" />
      <User category="follow" userName="박재영" detail="내용" />
      <User category="chat" userName="박재영" detail="내용" />
      <User category="comment" userName="박재영" />
    </>
  );
}

export default TestComponent;
