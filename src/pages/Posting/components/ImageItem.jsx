import React, { useEffect, useState } from 'react';
import '../style/ImageItem.scss';
import closeIcon from '../../../assets/icon/x.svg';
import { checkImageUrl } from '../../../utils/imageUrlProcess';

export function ImageItem({ img, onRemove }) {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const temp = img instanceof File ? URL.createObjectURL(img) : checkImageUrl(img);
    setImgSrc(temp);

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
