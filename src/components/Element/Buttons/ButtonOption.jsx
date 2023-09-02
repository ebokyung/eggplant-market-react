import React, { useEffect, useState } from 'react';
import './style/OtherButton.scss';
import { useRecoilState } from 'recoil';
import { modalItems } from '../../../recoil/modal/atoms';
import ModalContainer from '../Modal/ModalContainer';

// 고대비 테마 radio 설정
function ThemeRadio({ name, id, label, checked }) {
  return (
    <label htmlFor={id} className="theme-item">
      <input type="radio" name={name} id={id} checked={checked} className="theme" />
      {label}
    </label>
  );
}

function ButtonOption({ props }) {
  const [modal, openModal] = useState(false);
  const [modalitems, setModalItems] = useRecoilState(modalItems);

  const handleModal = () => {
    openModal(prev => !prev);
  };

  const handleTheme = () => {
    console.log('theme 변경');

    setModalItems(prev => [
      ...prev,
      {
        child: (
          <>
            <ThemeRadio name="colorSet" id="light" label="Light" checked={localStorage.getItem('theme') === 'light'} />
            <ThemeRadio name="colorSet" id="highContrast" label="HighContrast" checked={localStorage.getItem('theme') === 'highContrast'} />
          </>
        ),
        handleModal,
      },
    ]);
  };

  const handleLogout = () => {
    console.log('logout');
  };

  const options = [
    { text: '테마 변경', func: handleTheme },
    { text: '로그아웃', func: handleLogout, openAlert: true },
  ];

  useEffect(() => {
    if (modal) setModalItems(prev => [...prev, { options, handleModal }]);
    console.log('모달 추가 ', modalitems);
  }, [modal]);

  return (
    <>
      <button type="button" className="btn-option" {...props} onClick={() => handleModal()}>
        <span className="a11y-hidden">설정</span>
      </button>
      {modal && <ModalContainer />}
    </>
  );
}

export default ButtonOption;
