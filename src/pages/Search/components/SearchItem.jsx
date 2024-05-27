import React from 'react';
// import { User } from '../../../components/Element/User';
import { SearchUser } from '../../../components/Element/User';

function highlightKeyword(inputText, searchText) {
  const index = inputText.indexOf(searchText);

  // searchText를 찾지 못한 경우, 원본 문자열을 반환
  if (index === -1) {
    return inputText;
  }

  // 시작 부분부터 검색어 시작 인덱스까지의 문자열
  const start = inputText.substring(0, index);

  // 검색어 끝나는 부분부터 문자열 끝까지
  const end = inputText.substring(index + searchText.length);

  // 강조할 텍스트를 <strong> 태그로 감싸서 전체 문자열을 재조합
  return (
    <>
      {start}
      <strong>{searchText}</strong>
      {end}
    </>
  );
}

export default function SearchItem({ user, keyword }) {
  const { _id } = user;

  const author = { ...user };
  author.username = highlightKeyword(author.username, keyword);

  return (
    <li key={_id}>
      <SearchUser author={author} />
    </li>
  );
}
