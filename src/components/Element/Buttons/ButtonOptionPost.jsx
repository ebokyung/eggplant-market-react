import React, { useState } from 'react';
import './style/OtherButton.scss';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Modal from '../Modal/Modal';
import { deletePostAPI, postPostReportAPI } from './api';
import { openModalHook } from '../../../hooks/optionBtn';

function ButtonOptionPost({ postid, isMyPost }) {
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  openModalHook(isModal);

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleUpdate = () => {
    navigate(`/posting?postId=${postid}`);
  };

  const handleDelete = async () => {
    const res = await deletePostAPI(postid);
    if (res.status === '200') {
      if (location.pathname === '/post') navigate(-1);
      else window.location.reload();
    }
  };

  const handleReport = async () => {
    const res = await postPostReportAPI(postid);
    if (res.status !== 404) toast('게시글 신고 완료', { icon: '⚠️', position: 'bottom-center', ariaProps: { role: 'alert', 'aria-live': 'polite' } });
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
