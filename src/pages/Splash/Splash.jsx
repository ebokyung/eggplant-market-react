import React, { useEffect } from 'react';
import './Splash.scss';
import { useNavigate } from 'react-router-dom';
import SymbolImg from '../../assets/symbol/light-basic.svg';
import SymbolImgHC from '../../assets/symbol/hc-basic.svg';
import LogoBlack from '../../assets/logo/logo-black.svg';
import LogoWhite from '../../assets/logo/logo-white.svg';
import { storage } from '../../utils/storage';

export function Splash() {
  const theme = window.localStorage.getItem('theme');
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (storage.getToken()) {
        navigate('/home');
      } else {
        navigate('/login');
      }
    }, 2000);
  }, []);

  return (
    <article className="splash">
      <h1 className="a11y-hidden">splash</h1>
      <img id="symbol-image" src={theme === 'light' ? SymbolImg : SymbolImgHC} alt="가지마켓 로고" />
      <img id="logo-image" src={theme === 'light' ? LogoBlack : LogoWhite} alt="가지마켓" />
    </article>
  );
}
