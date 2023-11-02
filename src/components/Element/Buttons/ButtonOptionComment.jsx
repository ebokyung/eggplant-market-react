import React, { useState } from 'react';
import './style/OtherButton.scss';
import { useLocation } from 'react-router-dom';
import Modal from '../Modal/Modal';
import { deleteCommentAPI, postCommentReportAPI } from './api';

function ButtonOptionComment({ commentid, isMyCmt }) {
  const [isModal, setIsModal] = useState(false);
  const location = useLocation();
  const postid = new URLSearchParams(location.search).get('postId');

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleDelete = async () => {
    const res = await deleteCommentAPI(postid, commentid);
    if (res.status === '200') window.location.reload();
  };

  const handleReport = async () => {
    const res = await postCommentReportAPI(postid, commentid);
    if (res.report) console.log('신고 완료');
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
