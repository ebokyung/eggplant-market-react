import React from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import './Modal.scss';
import { openModal, openAlert, doAlert, modalItems } from '../../../recoil/modal/atoms';

function Modal({ options, children }) {
  const isModal = useSetRecoilState(openModal);
  const isAlert = useSetRecoilState(openAlert);
  const doFunc = useSetRecoilState(doAlert);
  const [modalitems, setModalItems] = useRecoilState(modalItems);

  const handleModalClose = () => {
    setModalItems(prev => [...prev.slice(0, prev.length - 1)]);
    console.log('삭제:', modalitems);
    if (modalitems.length === 1) isModal(prev => !prev);
  };

  return (
    <article className="modal-background">
      <h2 className="a11y-hidden">모달창</h2>
      <div className="l_modal">
        {options?.map(i => (
          <button
            key={i.text}
            type="button"
            onClick={() => {
              if (i.openModal) {
                isAlert(prev => !prev);
                doFunc({ text: i.text, func: i.func });
              } else {
                i.func();
              }
            }}
          >
            {i.text}
          </button>
        ))}
        {children}
        <button type="button" onClick={() => handleModalClose()}>
          취소
        </button>
      </div>
    </article>
  );
}

export default Modal;

// 게시글 상세 페이지 (댓글)
// const commentOptions = [
//   { text: '삭제', class: 'btn-delete' }, // 내가 작성한 댓글

//   { text: '신고', class: 'btn-report' }, // 남이 작성한 댓글
// ];

// 프로필페이지 - 상품판매
// const productOptions = [
//   { text: '삭제', class: 'btn-product-delete' },
//   { text: '수정', class: 'btn-product-edit' },
//   { text: '웹사이트에서 상품 보기', class: 'btn-product-link' },
// ];

// 프로필페이지
// const Options = [
//   { text: '테마 변경', class: 'btn-theme' },
//   { text: '로그아웃', class: 'btn-logout' },
// ];

// 게시글 (프로필, 게시물상세, 홈피드)
// const postOptions = [
//   { text: '수정', class: 'btn-edit' }, // 프로필 페이지, 게시물 상세 (내 게시물일때)
//   { text: '삭제', class: 'btn-delete' },

//   { text: '신고', class: 'btn-report' },
// ];

// const chatOption = [
//   {text: '채팅방나가기'}
// ]

// 삭제, 신고, 채팅방나가기, 테마변경, 로그아웃
// 수정 빼고는 팝업창이 필요함
