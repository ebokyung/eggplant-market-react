import React, { useEffect, useRef, useState } from 'react';
import '../style/ImageItem.scss';
import closeIcon from '../../../assets/icon/x.svg';
import { getImageWithTheme } from '../../../utils/imageUrlProcess';

export function ImageItem({ img, onRemove }) {
  const [imgSrc, setImgSrc] = useState('');
  const blobArray = useRef([]);

  useEffect(() => {
    let src;
    if (img instanceof File) {
      src = URL.createObjectURL(img);
      blobArray.current.push(src);
    } else {
      src = getImageWithTheme({ img, type: 'post' });
    }
    setImgSrc(src);

    return () => {
      blobArray.current.forEach(blob => URL.revokeObjectURL(blob));
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
