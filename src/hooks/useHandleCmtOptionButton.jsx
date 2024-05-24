import { useState } from 'react';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';
import { deleteCommentAPI, postCommentReportAPI } from '../components/Element/Buttons/api';

const useHandleCmtOptionButton = (commentid, isMyCmt) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchParam] = useSearchParams();
  const postid = searchParam.get('postId');

  const handleModal = () => {
    setIsModalOpen(prev => !prev);
  };

  const handleDelete = async () => {
    const res = await deleteCommentAPI(postid, commentid);
    if (res.status === '200') window.location.reload();
  };

  const handleReport = async () => {
    const res = await postCommentReportAPI(postid, commentid);
    if (res.report) toast('댓글 신고 완료', { icon: '⚠️', position: 'bottom-center', ariaProps: { role: 'alert', 'aria-live': 'polite' } });
  };

  const myOptions = [{ text: '삭제', func: handleDelete, openAlert: true }];
  const yourOptions = [{ text: '신고', func: handleReport, openAlert: true }];

  const options = isMyCmt ? myOptions : yourOptions;

  return { isModalOpen, handleModal, options };
};

export default useHandleCmtOptionButton;
