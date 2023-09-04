import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Error.scss';

export function Error() {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <article className="error">
      <h2 className="a11y-hidden">404에러</h2>
      <p className="desc">페이지를 찾을 수 없습니다. :(</p>
      <button className="btn-back" onClick={goBack} type="button">
        이전 페이지
      </button>
    </article>
  );
}
