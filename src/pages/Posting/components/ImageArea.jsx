import React, { useState } from 'react';
import uploadIcon from '../../../assets/icon/upload-file.svg';
import { ImageItem } from './ImageItem';

export function ImageArea({ initialData = [] }) {
  const [imageList, setImageList] = useState(initialData);
  const handleImage = e => {
    const temp = [...e.target.files].map(image => URL.createObjectURL(image));
    const Images = [...imageList, ...temp];
    setImageList(Images);
  };

  const handleRemoveImage = removedImage => {
    const updatedImageList = imageList.filter(image => image !== removedImage);
    setImageList(updatedImageList);
  };
  return (
    <>
      <ul className="upload-imgs-list">
        {imageList.map(image => (
          <li key={`${image}`}>
            <ImageItem img={image} onRemove={removedImage => handleRemoveImage(removedImage)} />
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
