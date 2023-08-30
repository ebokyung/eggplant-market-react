import React from 'react';
import './Confirm.scss';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { openAlert, doAlert } from '../../../recoil/modal/atoms';

function Confirm() {
  const isAlert = useSetRecoilState(openAlert);
  const doFunc = useRecoilValue(doAlert);

  return (
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
            }}
          >
            {doFunc.text}
          </button>
          <button type="button" onClick={() => isAlert(prev => !prev)}>
            취소
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirm;
