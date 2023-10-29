import React, { useState } from 'react';
import './style/OtherButton.scss';
import Modal from '../Modal/Modal';

function ButtonOptionPost({ postid, isMyPost }) {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleUpdate = () => {
    console.log(`${postid} 게시글 수정`);
  };

  const handleDelete = () => {
    console.log(`${postid} 게시글 삭제`);
  };

  const handleReport = () => {
    console.log('신고');
  };

  const myOptions = [
    { text: '수정', func: handleUpdate },
    { text: '삭제', func: handleDelete, openAlert: true },
  ];

  const options = [{ text: '신고', func: handleReport, openAlert: true }];

  return (
    <>
      <button type="button" className="btn-option" onClick={() => handleModal()}>
        <span className="a11y-hidden">더보기</span>
      </button>
      {isModal && <Modal options={isMyPost ? myOptions : options} closeModal={handleModal} />}
    </>
  );
}

export default ButtonOptionPost;
