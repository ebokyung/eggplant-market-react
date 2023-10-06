import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../components/Element/Buttons';
import '../style/Home.scss';

export function HomeWithoutPost() {
  const navigate = useNavigate();

  const handleLink = () => {
    navigate('/search');
  };

  return (
    <main className="main-without-post">
      <p>유저를 검색해 팔로우 해보세요!</p>
      <Button className="size-m" onClick={handleLink}>
        검색하기
      </Button>
    </main>
  );
}
