import React from 'react';
import '../style/ImageItem.scss';
import closeIcon from '../../../assets/icon/x.svg';

export function ImageItem({ img, onRemove }) {
  const handleRemove = () => {
    onRemove(img);
  };

  return (
    <div className="posting-img-cover">
      <img src={img} alt="" />
      <button type="button" className="btn-remove" onClick={() => handleRemove()}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
}
