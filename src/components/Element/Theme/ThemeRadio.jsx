import React from 'react';
import { useSetRecoilState } from 'recoil';
import { themeAtom } from '../../../recoil/theme/atoms';

// 고대비 테마 radio 설정
function ThemeRadioItem({ name, id, label, checked }) {
  const setTheme = useSetRecoilState(themeAtom);
  const handleTheme = theme => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme); // css 이미지 url
    setTheme(theme); // 동적으로 생성되어 직접 바꾸어줘야하는 이미지 src (기본 프로필 이미지)
    // applyThemeToErrorImage(theme);
  };
  return (
    <label htmlFor={id} className="theme-item">
      <input type="radio" name={name} id={id} defaultChecked={checked} className="theme" onClick={() => handleTheme(id)} />
      {label}
    </label>
  );
}

export default ThemeRadioItem;
