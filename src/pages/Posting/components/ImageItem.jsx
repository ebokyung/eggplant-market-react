import React from 'react';
import '../style/ImageItem.scss';
import closeIcon from '../../../assets/icon/x.svg';

export function ImageItem({ img, onRemove }) {
  return (
    <div className="posting-img-cover">
      <img src={img instanceof File ? URL.createObjectURL(img) : `https://api.mandarin.weniv.co.kr/${img}`} alt="" />
      <button type="button" className="btn-remove" onClick={() => onRemove(img)}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
}
