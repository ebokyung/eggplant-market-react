import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import searchIcon from '../../../assets/icon/icon-search.svg';
import searchIconHc from '../../../assets/icon/icon-search-hc.svg';
import { Button, ButtonOption, ButtonBack } from '../Buttons';
import { themeAtom } from '../../../recoil/theme/atoms';

function Header({ page, text, btnText, children, className, btnDisabled = true, formName }) {
  // props : page (main || upload || follow) , text , btnText

  const theme = useRecoilValue(themeAtom);
  const searchSrc = theme === 'light' ? searchIcon : searchIconHc;

  return (
    <header className={`l_header header-${page || 'basic'} ${className}`}>
      {text && (
        <h1 className={page === 'main' ? 'title-main' : 'title'}>
          {text}
          {/* expected children : hidden span tag */}
          {children}
        </h1>
      )}
      {page === 'main' && (
        <Link to="/search" type="button">
          <img className="search-icon" src={searchIcon} alt="검색하기" />
        </Link>
      )}
      {page === 'upload' &&
        (children ? (
          <div>
            {/* expected children : button skeleton for loading state */}
            {children}
          </div>
        ) : (
          <Button type="submit" className="size-ms" disabled={btnDisabled} form={formName}>
            {btnText || '업로드'}
          </Button>
        ))}
      {!page && <ButtonOption />}
      {page !== 'main' && <ButtonBack />}
    </header>
  );
}

export default Header;
