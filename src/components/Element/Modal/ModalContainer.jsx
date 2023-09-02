import React from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import Modal from './Modal';
import { modalItems } from '../../../recoil/modal/atoms';

function ModalContainer() {
  const modalList = useRecoilValue(modalItems);

  const renderModal = modalList.map(item => {
    return (
      <Modal options={item.options} handleModal={item.handleModal}>
        {item.child}
      </Modal>
    );
  });

  console.log('draw', renderModal);

  return createPortal(renderModal, document.getElementById('root'));
}

export default ModalContainer;
