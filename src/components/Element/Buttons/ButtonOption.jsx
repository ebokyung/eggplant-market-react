import React from 'react';
import './style/OtherButton.scss';

function ButtonOption({ props }) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button type="button" className="btn-option" {...props}>
      <span className="a11y-hidden">설정</span>
    </button>
  );
}

export default ButtonOption;
