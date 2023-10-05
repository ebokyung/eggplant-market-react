import React from 'react';
import { User } from '../../../components/Element/User';

function highlightKeyword(text, keyword) {
  if (text.indexOf(keyword) !== -1) {
    const parts = text.split(keyword);
    return (
      <>
        {parts[0]}
        <strong>{keyword}</strong>
        {parts[1]}
      </>
    );
  }
  return text;
}

export function SearchItem({ user, keyword }) {
  const { _id, username, accountname, image } = user;
  // highlight 처리하기
  const content = highlightKeyword(username, keyword);

  return (
    <li key={_id}>
      <User profileImg={image} category="search" userName={content} accountName={accountname} detail={accountname} />
    </li>
  );
}
