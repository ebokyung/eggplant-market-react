import React from 'react';
// import { User } from '../../../components/Element/User';
import { SearchUser } from '../../../components/Element/User';

// 문제 있어보이는디?
/**
 * ! split을 하면 안될거 같음
 */

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

export default function SearchItem({ user, keyword }) {
  const { _id, username } = user;
  const content = highlightKeyword(username, keyword);
  console.log(content);

  return (
    <li key={_id}>
      <SearchUser author={user} />
    </li>
  );
}
