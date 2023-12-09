/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect } from 'react';
import { useSetRecoilState, useRecoilState } from 'recoil';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { isAlertOpen, doAlert } from '../../../recoil/modal/atoms';
import Alert from './Alert';

function Modal({ options, children, closeModal }) {
  const [isAlert, setIsAlert] = useRecoilState(isAlertOpen);
  const doFunc = useSetRecoilState(doAlert);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const renderModal = (
    <>
      <article
        className="modal-background"
        onClick={() => closeModal()}
        onKeyDown={e => {
          if (e.key === 'Escape') {
            closeModal();
          }
        }}
      >
        <h2 className="a11y-hidden">모달창</h2>
        <div className="l_modal" onClick={e => e.stopPropagation()}>
          {options?.map((i, idx) => (
            <button
              key={i.text}
              type="button"
              onClick={() => {
                if (i.openAlert) {
                  setIsAlert(true);
                  doFunc({ text: i.text, func: i.func });
                } else {
                  i.func();
                }
              }}
              autoFocus={idx === 0}
            >
              {i.text}
            </button>
          ))}
          {children}
          <button type="button" onClick={() => closeModal()}>
            취소
          </button>
        </div>
      </article>
      {isAlert && <Alert closeModal={closeModal} />}
    </>
  );

  return createPortal(renderModal, document.getElementById('root'));
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

// 게시글 (프로필, 게시물상세, 홈피드)
// const postOptions = [
//   { text: '수정', class: 'btn-edit' }, // 프로필 페이지, 게시물 상세 (내 게시물일때)
//   { text: '삭제', class: 'btn-delete' },

//   { text: '신고', class: 'btn-report' },
// ];

// const chatOption = [
//   {text: '채팅방나가기'}
// ]

// -----------------------------------
// 삭제, 신고, 채팅방나가기, 테마변경, 로그아웃
// 수정 빼고는 팝업창이 필요함

// 프로필페이지
// const Options = [
//   { text: '테마 변경', class: 'btn-theme' },
//   { text: '로그아웃', class: 'btn-logout' },
// ];
