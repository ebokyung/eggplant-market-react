import React, { useState, useEffect } from 'react';
import uploadIcon from '../../../assets/icon/upload-file.svg';
import { ImageItem } from './ImageItem';

export function ImageArea({ initialData = [], imgData, setImgData }) {
  const [imageList, setImageList] = useState(initialData.map(img => `https://api.mandarin.weniv.co.kr/${img}`));

  const handleImage = e => {
    const temp = [...e.target.files].map(image => URL.createObjectURL(image));
    const Images = [...imageList, ...temp];
    setImageList(Images);
    setImgData(prev => [...prev, ...e.target.files]);
  };

  const handleRemoveImage = (removedImage, idx) => {
    const updatedImageList = imageList.filter(image => image !== removedImage);
    setImageList(updatedImageList);
    const updatedImageData = [...imgData];
    updatedImageData.splice(idx, 1);
    setImgData(updatedImageData);
  };

  // 확인용
  useEffect(() => {
    console.log('이미지 미리보기 리스트:', imageList, ' file name:', imgData);
  }, [imgData, imageList]);
  return (
    <>
      <ul className="upload-imgs-list">
        {imageList.map((image, idx) => (
          <li key={`${image}`}>
            <ImageItem img={image} onRemove={removedImage => handleRemoveImage(removedImage, idx)} />
          </li>
        ))}
      </ul>
      <label className="input-file-btn" htmlFor="input-file">
        <img id="image-upload-btn" src={uploadIcon} alt="" />
        <input name="images" type="file" id="input-file" accept="img/*" multiple onChange={e => handleImage(e)} />
      </label>
    </>
  );
}
