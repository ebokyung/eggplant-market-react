import React, { useEffect, useState } from 'react';
import './style/OtherButton.scss';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import Modal from '../Modal/Modal';
import { storage } from '../../../utils/storage';
import { themeAtom } from '../../../recoil/theme/atoms';

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

function ButtonOption() {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  useEffect(() => {
    if (!isModal) setIsThemeModalOpen(() => false);
  }, [isModal]);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleLogout = () => {
    storage.clearStorage();
    navigate('/login');
  };

  const options = [
    { text: '테마 변경', func: () => setIsThemeModalOpen(true) },
    { text: '로그아웃', func: handleLogout, openAlert: true },
  ];

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className="a11y-hidden">설정</span>
      </button>
      {isModal &&
        (isThemeModalOpen ? (
          <Modal closeModal={handleModal}>
            <>
              <ThemeRadio name="colorSet" id="light" label="Light" checked={localStorage.getItem('theme') === 'light'} defaultChecked />
              <ThemeRadio name="colorSet" id="highContrast" label="HighContrast" checked={localStorage.getItem('theme') === 'highContrast'} />
            </>
          </Modal>
        ) : (
          <Modal options={options} closeModal={handleModal} />
        ))}
    </>
  );
}

export default ButtonOption;
