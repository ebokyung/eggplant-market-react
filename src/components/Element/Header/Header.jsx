import React from 'react';
import './Header.scss';
import searchIcon from '../../../assets/icon/icon-search.svg';
import optionIcon from '../../../assets/icon/icon-more-vertical.svg';

function Header(props) {
  // props : home || search || follow || upload , text
  return (
    <header className="l_header header-main">
      {props?.text && <h1 className={props?.home ? 'title-main' : 'title'}>{props?.text}</h1>}
      {props?.home && (
        <button type="button">
          <img src={searchIcon} alt="검색하기" />
        </button>
      )}
      {props?.search && (
        <label htmlFor="inp-search" className="l_inp-search">
          <span className="a11y-hidden">이름 혹은 계정으로 사용자 검색하기</span>
          <input type="text" id="inp-search" placeholder="이름 혹은 계정으로 사용자 검색하기" />
        </label>
      )}
      {!(props?.home || props?.follow || props?.upload || props?.search) && (
        <button type="button">
          <img src={optionIcon} alt="설정하기" />
        </button>
      )}
      {props?.upload && <button type="button">업로드</button>}
      {!props?.home && (
        <button type="button" className="backbtn">
          뒤로
        </button>
      )}
    </header>
  );
}

export default Header;
