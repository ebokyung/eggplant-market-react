import React from 'react';
import Modal from '../Modal/Modal';
import ThemeModal from '../Theme/ThemeModal';
import useHandleSettingOptionButton from '../../../hooks/useHandleSettingOptionButton';
import './style/OtherButton.scss';

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
