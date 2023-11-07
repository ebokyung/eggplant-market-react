import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import uploadFileIconHc from '../../../assets/icon/upload-file-hc.svg';
import uploadFileIcon from '../../../assets/icon/upload-file.svg';
import { ImageItem } from './ImageItem';
import { themeAtom } from '../../../recoil/theme/atoms';

export function ImageArea({ imgData, setImgData }) {
  const theme = useRecoilValue(themeAtom);
  // 이미지 처리 로직
  const handleImage = e => {
    // e.target.value = null 처리를 위해서 임시로 복사본 생성
    const temp = [...e.target.files];
    if (imgData.length + temp.length <= 3) {
      setImgData(prev => [...prev, ...temp]);
      e.target.value = null;
      return;
    }
    alert('이미지가 만아요2');
  };

  const checkImageLength = e => {
    if (imgData.length >= 3) {
      e.preventDefault();
      alert('이미지가 만아요');
    }
  };

  const handleRemoveImage = removedImage => {
    setImgData(prev => prev.filter(currImg => currImg !== removedImage));
  };

  return (
    <>
      <ul className="upload-imgs-list">
        {imgData.map(image => (
          <li key={uuidv4()}>
            <ImageItem img={image} onRemove={removedImage => handleRemoveImage(removedImage)} />
          </li>
        ))}
      </ul>
      <label className="input-file-btn" htmlFor="input-file">
        <img id="image-upload-btn" src={theme === 'light' ? uploadFileIcon : uploadFileIconHc} alt="" />
        <input type="file" id="input-file" accept="image/*" multiple onClick={e => checkImageLength(e)} onChange={e => handleImage(e)} />
      </label>
    </>
  );
}
