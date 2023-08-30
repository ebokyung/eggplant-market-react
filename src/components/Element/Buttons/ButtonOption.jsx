import React from 'react';
import './style/OtherButton.scss';
import { useSetRecoilState } from 'recoil';
import { openModal } from '../../../recoil/modal/atoms';

function ButtonOption({ props }) {
  const isOpenModal = useSetRecoilState(openModal);

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className="btn-option" {...props} onClick={() => isOpenModal(prev => !prev)}>
      <span className="a11y-hidden">설정</span>
    </button>
  );
}

export default ButtonOption;
