import React, { useState, useEffect, useRef } from 'react';

export function InputProductImage({ initialValue }) {
  const [productImg, setProductImg] = useState(initialValue);
  const imageRef = useRef();

  useEffect(() => {
    imageRef.current.style.backgroundImage = `url(${productImg})`;
  }, [productImg]);

  useEffect(() => {
    return () => {
      if (productImg !== '' || productImg !== initialValue) {
        URL.revokeObjectURL(productImg);
      }
    };
  }, []);

  return (
    <article className="product-img-cover" ref={imageRef}>
      <h2 className="a11y-hidden">판매 상품 이미지</h2>
      <label
        className="btn-upload"
        htmlFor="product-img-input"
        role="tabpanel"
        tabIndex="0"
        onChange={e => {
          if (e.target.files[0]) setProductImg(URL.createObjectURL(e.target.files[0]));
        }}
      >
        <span className="a11y-hidden">판매 상품 이미지 업로드 버튼</span>
        <svg className="btn-upload-svg" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="18" fill="#C4C4C4" />
          <path
            d="M24.4167 9.75H11.5833C10.5708 9.75 9.75 10.5708 9.75 11.5833V24.4167C9.75 25.4292 10.5708 26.25 11.5833 26.25H24.4167C25.4292 26.25 26.25 25.4292 26.25 24.4167V11.5833C26.25 10.5708 25.4292 9.75 24.4167 9.75Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.7915 16.1665C15.5509 16.1665 16.1665 15.5509 16.1665 14.7915C16.1665 14.0321 15.5509 13.4165 14.7915 13.4165C14.0321 13.4165 13.4165 14.0321 13.4165 14.7915C13.4165 15.5509 14.0321 16.1665 14.7915 16.1665Z"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M26.2502 20.7498L21.6668 16.1665L11.5835 26.2498" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <input id="product-img-input" type="file" name="productImg" accept="image/*" />
      </label>
    </article>
  );
}
