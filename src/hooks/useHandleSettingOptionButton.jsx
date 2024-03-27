import { useCallback, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { storage } from '../utils/storage';

const useHandleSettingOptionButton = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);

  useEffect(
    function 테마모달닫기() {
      if (!isModalOpen) setIsThemeModalOpen(() => false);
    },
    [isModalOpen],
  );

  const handleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleLogout = useCallback(function 로그아웃() {
    storage.clearStorage();
    navigate('/login');
  }, []);

  const options = [
    { text: '테마 변경', func: () => setIsThemeModalOpen(true) },
    { text: '로그아웃', func: handleLogout, openAlert: true },
  ];

  return { isModalOpen, isThemeModalOpen, handleModal, options };
};

export default useHandleSettingOptionButton;
