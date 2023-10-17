import React from 'react';
import { ButtonBack } from '../Buttons';
import './Header.scss';

export function HeaderSearch({ searchKeyword, handleSearch }) {
  return (
    <header className="l_header header-search">
      <label htmlFor="inp-search" className="l_inp-search">
        <span className="a11y-hidden">이름 혹은 계정으로 사용자 검색하기</span>
        <input type="text" value={searchKeyword} onChange={e => handleSearch(e)} id="inp-search" placeholder="이름 혹은 계정으로 사용자 검색하기" />
      </label>
      <ButtonBack />
    </header>
  );
}
