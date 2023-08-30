import React, { useEffect } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import Header from '../components/Element/Header/Header';
import ModalContainer from '../components/Element/Modal/ModalContainer';
import Confirm from '../components/Element/Modal/Confirm';
import { openModal, openAlert, modalItems } from '../recoil/modal/atoms';

// 고대비 테마 radio 설정
function ThemeRadio({ name, id, label, checked }) {
  return (
    <label htmlFor={id} className="theme-item">
      <input type="radio" name={name} id={id} checked={checked} className="theme" />
      {label}
    </label>
  );
}

function Profile() {
  const alert = useRecoilValue(openAlert);
  const modal = useRecoilValue(openModal);
  const [modalitems, setModalItems] = useRecoilState(modalItems);

  const handleTheme = () => {
    // eslint-disable-next-line
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
      },
    ]);
    // eslint-disable-next-line
    console.log(modalitems);
  };

  const handleLogout = () => {
    // eslint-disable-next-line
    console.log('logout');
  };
  const options = [
    { text: '테마 변경', func: handleTheme },
    { text: '로그아웃', func: handleLogout, openModal: true },
  ];

  useEffect(() => {
    if (modal) setModalItems(prev => [...prev, { options }]);
    // eslint-disable-next-line
    console.log('modal useEffect: ', modalitems);
  }, [modal]);

  return (
    <>
      <Header />
      {modal && <ModalContainer />}
      {alert && <Confirm />}
    </>
  );
}

export default Profile;
