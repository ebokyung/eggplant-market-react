import React, { useEffect, useState } from 'react';
import '../style/ImageItem.scss';
import { useRecoilValue } from 'recoil';
import closeIcon from '../../../assets/icon/x.svg';
import { getImageWithTheme } from '../../../utils/imageUrlProcess';
import { useBlob } from '../../../hooks/useBlob';
import { themeAtom } from '../../../recoil/theme/atoms';

export function ImageItem({ img, onRemove }) {
  const theme = useRecoilValue(themeAtom);

  const [imgSrc, setImgSrc] = useState('');
  const blobArray = useBlob();

  useEffect(() => {
    let src;
    if (img instanceof File) {
      src = URL.createObjectURL(img);
      blobArray.push(src);
    } else {
      src = getImageWithTheme({ img, type: 'post', theme });
    }
    setImgSrc(src);
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
