import React from 'react';
import { createPortal } from 'react-dom';
import { useRecoilValue } from 'recoil';
import { modalItems } from '../../../recoil/modal/atoms';
import Modal from './Modal';

function ModalContainer() {
  const modalList = useRecoilValue(modalItems);

  const renderModal = modalList.map(item => {
    return <Modal options={item.options}>{item.child}</Modal>;
  });

  console.log('draw', renderModal);

  return createPortal(renderModal, document.getElementById('root'));
}

export default ModalContainer;
