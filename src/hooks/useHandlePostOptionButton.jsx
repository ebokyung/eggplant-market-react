import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import { deletePostAPI, postPostReportAPI } from '../components/Element/Buttons/api';

const useHandlePostOptionButton = (postid, isMyPost) => {
  const [isModalOpen, setIsModaOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleModal = () => {
    setIsModaOpen(prev => !prev);
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
  const yourOptions = [{ text: '신고', func: handleReport, openAlert: true }];

  const options = isMyPost ? myOptions : yourOptions;

  return { isModalOpen, handleModal, options };
};

export default useHandlePostOptionButton;
