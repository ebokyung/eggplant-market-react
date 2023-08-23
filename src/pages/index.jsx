/* eslint-disable react/jsx-props-no-spreading */
// 테스트용 jsx
import React from 'react';
import { Button, ButtonBack, ButtonOption } from '../components/Element/Buttons';
import { User } from '../components/Element/User';
import Post from '../components/Element/Post/Post';
import FollowingItem from '../components/Element/Follow/FollowingItem';
import Comment from '../components/Element/Comment/Comment';

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
  const postDummy = {
    author: { _id: '6493b05fb2cb205663603e62', username: '가은', accountname: 'oxxunnnn21', intro: '메렁', image: '1692533087329.png' },
    commentCount: 1,
    comments: ['64e3713db2cb2056634abeeb'],
    content: 'ssssss',
    createdAt: '2023-08-10T11:41:54.493Z',
    heartCount: 1,
    hearted: false,
    id: '64d4cd02b2cb2056633dcdc3',
    image: 'https://api.mandarin.weniv.co.kr/1691667712522.jpg',
    updatedAt: '2023-08-23T06:40:45.959Z',
  };

  const postDummy2 = {
    author: { _id: '6493b05fb2cb205663603e62', username: '가은', accountname: 'oxxunnnn21', intro: '메렁', image: '1692533087329.png' },
    commentCount: 1,
    comments: ['64e3713db2cb2056634abeeb'],
    content: 'ssssss',
    createdAt: '2023-08-10T11:41:54.493Z',
    heartCount: 1,
    hearted: true,
    id: '64d4cd02b2cb2056633dcdc3',
    image: null,
    updatedAt: '2023-08-23T06:40:45.959Z',
  };
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
      <hr />
      <Post post={postDummy} />
      <Post post={postDummy2} />
      <hr />
      <FollowingItem />
      <hr />
      <Comment />
    </>
  );
}

export default TestComponent;
