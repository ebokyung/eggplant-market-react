import React from 'react';
import './Alert.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import { isAlertOpen, doAlert } from '../../../recoil/modal/atoms';

function Alert({ closeModal }) {
  const isAlert = useSetRecoilState(isAlertOpen);
  const doFunc = useRecoilValue(doAlert);

  const renderAlert = (
    <dialog className="modal-background">
      <h2 className="a11y-hidden">확인창</h2>
      <div className="modal-content">
        <p className="modal-description">{doFunc?.text}하시겠습니까?</p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={() => {
              doFunc?.func();
              isAlert(false);
              closeModal();
            }}
          >
            {doFunc?.text}
          </button>
          <button type="button" onClick={() => isAlert(false)}>
            취소
          </button>
        </div>
      </div>
    </dialog>
  );

  return createPortal(renderAlert, document.getElementById('root'));
}

export default Alert;
