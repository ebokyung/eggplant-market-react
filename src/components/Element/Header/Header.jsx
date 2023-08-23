import React from 'react';
import './Header.scss';
import searchIcon from '../../../assets/icon/icon-search.svg';
import { Button, ButtonOption, ButtonBack } from '../Buttons/index';

function Header({ page, text, btnText }) {
  // props : page (main || search || upload || follow) , text , btnText
  return (
    <header className={`l_header header-${page || 'basic'}`}>
      {text && <h1 className={page === 'main' ? 'title-main' : 'title'}>{text}</h1>}
      {page === 'main' && (
        <button type="button">
          <img src={searchIcon} alt="검색하기" />
        </button>
      )}
      {page === 'search' && (
        <label htmlFor="inp-search" className="l_inp-search">
          <span className="a11y-hidden">이름 혹은 계정으로 사용자 검색하기</span>
          <input type="text" id="inp-search" placeholder="이름 혹은 계정으로 사용자 검색하기" />
        </label>
      )}
      {page === 'upload' && (
        <Button type="submit" className="size-ms" disabled>
          {btnText || '업로드'}
        </Button>
      )}
      {!page && <ButtonOption />}
      {page !== 'main' && <ButtonBack />}
    </header>
  );
}

export default Header;
