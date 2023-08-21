import React from 'react';
import './style/OtherButton.scss';
import { useNavigate } from 'react-router-dom';

function ButtonBack() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <button type="button" className="btn-back" onClick={goBack}>
      <span className="a11y-hidden">뒤로가기</span>
    </button>
  );
}

export default ButtonBack;
