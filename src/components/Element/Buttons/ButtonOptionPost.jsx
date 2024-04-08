import React from 'react';
import './style/OtherButton.scss';
import Modal from '../Modal/Modal';
import useHandlePostOptionButton from '../../../hooks/useHandlePostOptionButton';

function ButtonOptionPost({ postid, isMyPost }) {
  const { isModalOpen, handleModal, options } = useHandlePostOptionButton(postid, isMyPost);

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className="a11y-hidden">더보기</span>
      </button>
      {isModalOpen && <Modal options={options} closeModal={handleModal} />}
    </>
  );
}

export default ButtonOptionPost;
