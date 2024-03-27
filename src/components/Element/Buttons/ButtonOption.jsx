import React from 'react';
import './style/OtherButton.scss';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Modal from '../Modal/Modal';
import { themeAtom } from '../../../recoil/theme/atoms';
import useHandleSettingOptionButton from '../../../hooks/useHandleSettingOptionButton';

// 고대비 테마 radio 설정
function ThemeRadio({ name, id, label, checked }) {
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

function ThemeModal({ handleModal }) {
  const theme = useRecoilValue(themeAtom);
  const themeList = [
    { label: 'Light', themeName: 'light' },
    { label: 'HighContrast', themeName: 'highContrast' },
  ];

  return (
    <Modal closeModal={handleModal}>
      <>
        {themeList.map((item, idx) => (
          <ThemeRadio name="colorSet" id={item.themeName} label={item.label} checked={theme === item.themeName} defaultChecked={idx === 0} />
        ))}
      </>
    </Modal>
  );
}

function ButtonOption({ isViewText = false }) {
  const { isModalOpen, isThemeModalOpen, handleModal, options } = useHandleSettingOptionButton();

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className={isViewText ? '' : 'a11y-hidden'}>설정</span>
      </button>
      {isModalOpen && (isThemeModalOpen ? <ThemeModal handleModal={handleModal} /> : <Modal options={options} closeModal={handleModal} />)}
    </>
  );
}

export default ButtonOption;
