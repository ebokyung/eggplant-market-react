import React, { useState } from 'react';
import './style/OtherButton.scss';
import Modal from '../Modal/Modal';

function ButtonOptionComment({ commentid, isMyCmt }) {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleDelete = () => {
    console.log(`${commentid} 댓글 삭제`);
  };

  const handleReport = () => {
    console.log('댓글 신고');
  };

  const myOptions = [{ text: '삭제', func: handleDelete, openAlert: true }];

  const options = [{ text: '신고', func: handleReport, openAlert: true }];

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className="a11y-hidden">더보기</span>
      </button>
      {isModal && <Modal options={isMyCmt ? myOptions : options} closeModal={handleModal} />}
    </>
  );
}

export default ButtonOptionComment;
