import React, { useEffect, useState } from 'react';
import './style/OtherButton.scss';
import { useRecoilState } from 'recoil';
import { modalItems } from '../../../recoil/modal/atoms';
import ModalContainer from '../Modal/ModalContainer';

function ButtonOptionPost({ props }) {
  const [modal, openModal] = useState(false);
  const [modalitems, setModalItems] = useRecoilState(modalItems);

  const handleModal = () => {
    openModal(prev => !prev);
  };

  const handleUpdate = () => {
    console.log('게시글 수정');
  };

  const handleDelete = () => {
    console.log('게시글 삭제');
  };

  const handleReport = () => {
    console.log('신고');
  };

  const options = [
    { text: '수정', func: handleUpdate },
    { text: '삭제', func: handleDelete, openAlert: true },
    { text: '신고', func: handleReport, openAlert: true },
  ];

  useEffect(() => {
    if (modal) setModalItems(prev => [...prev, { options, handleModal }]);
    console.log('모달 추가 ', modalitems);
  }, [modal]);

  return (
    <>
      <button type="button" className="btn-option" {...props} onClick={() => handleModal()}>
        <span className="a11y-hidden">설정</span>
      </button>
      {modal && <ModalContainer />}
    </>
  );
}

export default ButtonOptionPost;
