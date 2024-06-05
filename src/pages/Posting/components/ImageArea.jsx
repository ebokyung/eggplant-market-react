import React, { Suspense } from 'react';
// ! uuidv4 : cleanup이 마운트시에도 실행되는 원인
// import { v4 as uuidv4 } from 'uuid';
import { useRecoilValue } from 'recoil';
import uploadFileIconHc from '../../../assets/icon/upload-file-hc.svg';
import uploadFileIcon from '../../../assets/icon/upload-file.svg';
import { ImageItem } from './ImageItem';
import { themeAtom } from '../../../recoil/theme/atoms';

const MAX_IMAGE_LENGTH = 3;

export function ImageArea({ imgData, setImgData }) {
  const theme = useRecoilValue(themeAtom);
  // 이미지 처리 로직
  const handleImage = e => {
    const { target } = e;

    // e.target.value = null 처리를 위해서 임시로 복사본 생성
    const copyFiles = [...target.files];
    if (imgData.length + copyFiles.length <= MAX_IMAGE_LENGTH) {
      setImgData(prev => [...prev, ...copyFiles]);
      target.value = null;
    }
  };

  const checkImageLength = e => {
    if (imgData.length >= MAX_IMAGE_LENGTH) {
      e.preventDefault();
    }
  };

  const handleRemoveImage = removedImage => {
    setImgData(prev => prev.filter(currImg => currImg !== removedImage));
  };

  return (
    <>
      <ul className="upload-imgs-list">
        {imgData.map(image => (
          // key 는 이미지로 처리해둠
          <li key={image.name ?? image}>
            <Suspense fallback={<div>loading</div>}>
              <ImageItem img={image} onRemove={handleRemoveImage} />
            </Suspense>
          </li>
        ))}
      </ul>
      <label className="input-file-btn" htmlFor="input-file">
        <img id="image-upload-btn" src={theme === 'light' ? uploadFileIcon : uploadFileIconHc} alt="" />
        <input type="file" id="input-file" accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic" multiple onClick={e => checkImageLength(e)} onChange={e => handleImage(e)} />
      </label>
    </>
  );
}
