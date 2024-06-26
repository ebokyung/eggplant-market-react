import React from 'react';
import './Header.scss';
import { Button, ButtonOption, ButtonBack, ButtonSearch } from '../Buttons';

function Header({ page, text, btnText, children, className, btnDisabled = true, formName }) {
  // props : page (main || upload || follow) , text , btnText
  return (
    <header id="header" className={`l_header header-${page || 'basic'} ${className}`}>
      {text && (
        <h1 className={page === 'main' ? 'title-main' : 'title'}>
          {text}
          {/* expected children : hidden span tag */}
          {children}
        </h1>
      )}
      {page === 'main' && <ButtonSearch />}
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
