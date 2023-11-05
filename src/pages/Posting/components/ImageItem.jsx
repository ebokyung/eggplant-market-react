import React, { useEffect } from 'react';
import '../style/ImageItem.scss';
import closeIcon from '../../../assets/icon/x.svg';

export function ImageItem({ img, onRemove }) {
  const imgSrc = img instanceof File ? URL.createObjectURL(img) : `https://api.mandarin.weniv.co.kr/${img}`;

  useEffect(() => {
    return () => {
      if (img instanceof File) URL.revokeObjectURL(imgSrc);
    };
  }, []);

  return (
    <div className="posting-img-cover">
      <img src={imgSrc} alt="" />
      <button type="button" className="btn-remove" onClick={() => onRemove(img)}>
        <img src={closeIcon} alt="" />
      </button>
    </div>
  );
}
