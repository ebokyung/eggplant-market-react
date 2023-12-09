import React, { useRef } from 'react';
import './Alert.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import { isAlertOpen, doAlert } from '../../../recoil/modal/atoms';

function Alert({ modalBtn, closeModal }) {
  const isAlert = useSetRecoilState(isAlertOpen);
  const doFunc = useRecoilValue(doAlert);

  const firstBtnRef = useRef(null);
  const lastBtnRef = useRef(null);

  const renderAlert = (
    <dialog
      className="modal-background"
      onClick={() => isAlert(false)}
      onKeyDown={e => {
        if (e.key === 'Escape') {
          isAlert(false);
        }
        if (e.key === 'Tab' && !!firstBtnRef.current) {
          if (!e.shiftKey) {
            if (document.activeElement === lastBtnRef.current) {
              e.preventDefault();
              firstBtnRef.current.focus();
            }
          } else if (document.activeElement === firstBtnRef.current) {
            e.preventDefault();
            lastBtnRef.current.focus();
          }
        }
      }}
    >
      <h2 className="a11y-hidden">확인창</h2>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <p className="modal-description">{doFunc?.text}하시겠습니까?</p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={() => {
              doFunc?.func();
              isAlert(false);
              closeModal();
            }}
            autoFocus
            ref={firstBtnRef}
          >
            {doFunc?.text}
          </button>
          <button
            type="button"
            onClick={() => {
              modalBtn.current.focus();
              isAlert(false);
            }}
            ref={lastBtnRef}
          >
            취소
          </button>
        </div>
      </div>
    </dialog>
  );

  return createPortal(renderAlert, document.getElementById('root'));
}

export default Alert;
