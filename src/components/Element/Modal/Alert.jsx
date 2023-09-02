import React from 'react';
import './Alert.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { createPortal } from 'react-dom';
import { openAlert, doAlert } from '../../../recoil/modal/atoms';

function Alert({ handleModalClose }) {
  const isAlert = useSetRecoilState(openAlert);
  const doFunc = useRecoilValue(doAlert);

  const renderAlert = (
    <div className="modal-background">
      <h2 className="a11y-hidden">팝업</h2>
      <div className="modal-content">
        <p className="modal-description">{doFunc.text}하시겠습니까?</p>
        <div className="modal-actions">
          <button
            type="button"
            onClick={() => {
              doFunc.func();
              isAlert(false);
              handleModalClose();
            }}
          >
            {doFunc.text}
          </button>
          <button type="button" onClick={() => isAlert(false)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(renderAlert, document.getElementById('root'));
}

export default Alert;
