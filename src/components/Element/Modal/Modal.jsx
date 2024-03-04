import React, { useCallback, useLayoutEffect, useRef } from 'react';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import './Modal.scss';
import { createPortal } from 'react-dom';
import { isAlertOpen, doAlert } from '../../../recoil/modal/atoms';
import Alert from './Alert';

function ModalItemButton({ option, idx }) {
  const setIsAlert = useSetRecoilState(isAlertOpen);
  const doFunc = useSetRecoilState(doAlert);
  return (
    <button
      type="button"
      onClick={() => {
        if (option.openAlert) {
          setIsAlert(true);
          doFunc({ text: option.text, func: option.func });
        } else {
          option.func();
        }
      }}
      autoFocus={idx === 0}
    >
      {option.text}
    </button>
  );
}

function Modal({ options, children, closeModal }) {
  const isAlert = useRecoilValue(isAlertOpen);
  const modalRef = useRef(null);
  const lastBtnRef = useRef(null);

  const handleKeyDown = useCallback(e => {
    e.preventDefault();
    if (e.key === 'Escape') {
      closeModal();
    }
    if (e.key === 'Tab') {
      if (!e.shiftKey) {
        if (document.activeElement === lastBtnRef.current) {
          // e.preventDefault();
          modalRef.current.firstChild.focus();
        }
      } else if (document.activeElement === modalRef.current.firstChild) {
        // e.preventDefault();
        lastBtnRef.current.focus();
      }
    }
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const renderModal = (
    <>
      <article className="modal-background" onClick={() => closeModal()} onKeyDown={e => handleKeyDown(e)}>
        <h2 className="a11y-hidden">모달창</h2>
        <div className="l_modal" onClick={e => e.stopPropagation()} ref={modalRef}>
          {options?.map((i, idx) => (
            <ModalItemButton key={i.text} option={i} idx={idx} />
          ))}
          {children}
          <button type="button" onClick={() => closeModal()} ref={lastBtnRef}>
            취소
          </button>
        </div>
      </article>
      {isAlert && <Alert modalBtn={modalRef.current.firstChild} closeModal={closeModal} />}
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
