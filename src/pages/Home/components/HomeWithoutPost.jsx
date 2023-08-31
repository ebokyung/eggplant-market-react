import React from 'react';
import { Button } from '../../../components/Element/Buttons';

export function HomeWithoutPost() {
  return (
    <main className="main-without-post">
      <p>유저를 검색해 팔로우 해보세요!</p>
      <Button className="size-m search-btn">검색하기</Button>
    </main>
  );
}
