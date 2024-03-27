import React from 'react';
import './style/OtherButton.scss';
import Modal from '../Modal/Modal';
import useHandleCmtOptionButton from '../../../hooks/useHandleCmtOptionButton';

function ButtonOptionComment({ commentid, isMyCmt }) {
  const { isModal, handleModal, options } = useHandleCmtOptionButton(commentid, isMyCmt);

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className="a11y-hidden">더보기</span>
      </button>
      {isModal && <Modal options={options} closeModal={handleModal} />}
    </>
  );
}

export default ButtonOptionComment;
