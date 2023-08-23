import React from 'react';
import { User } from '../User';

function SearchItem(user, keyword) {
  const { _id, username, accountname } = user;

  // highlight 처리하기

  return (
    <li key={_id}>
      <User category="search" userName={username} accountname={accountname} detail={accountname} />
    </li>
  );
}

export default SearchItem;
