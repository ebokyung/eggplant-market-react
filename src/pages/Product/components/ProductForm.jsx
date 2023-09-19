import React, { useState, useEffect } from 'react';
import { Input } from '../../../components/Element/Input';

export function ProductForm({ isOnSubmit, setIsOnSubmit }) {
  const urlRegEx = /^(https?:\/\/)?(www\.)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
  const [nameErrorMsg, setNameErrorMsg] = useState('');
  const [priceErrorMsg, setPriceErrorMsg] = useState('');
  const [linkErrorMsg, setLinkErrorMsg] = useState('');
  const [isDisabled, setIsDisabled] = useState(isOnSubmit);

  // 수정 페이지 경우
  // let [data, setData] = useState();
  // useEffect(() => {
  //   if (isOnSubmit) {
  //     data = api();
  //   }
  // }, []);

  const validateName = name => {
    if (name.trim().length >= 2 && name.trim().length <= 15) {
      setNameErrorMsg('');
    } else {
      setNameErrorMsg('2~15자 이내여야 합니다.');
    }
  };

  const validatePrice = price => {
    if (price !== '' && Number(price) <= 1000000000) {
      setPriceErrorMsg('');
    } else {
      setPriceErrorMsg('0~1000000000 숫자를 입력해 주세요.');
    }
  };

  const validateLink = link => {
    if (urlRegEx.test(link)) {
      setLinkErrorMsg('');
    } else {
      setLinkErrorMsg('URL 형식으로 입력해 주세요.');
    }
  };

  useEffect(() => {
    setIsDisabled(!(!nameErrorMsg && !priceErrorMsg && !linkErrorMsg));
  }, [nameErrorMsg, priceErrorMsg, linkErrorMsg]);

  useEffect(() => {
    setIsOnSubmit(!isDisabled);
  }, [isDisabled]);

  return (
    <form id="form-product">
      <article className="product-img-cover">
        <h2 className="a11y-hidden">판매 상품 이미지</h2>
        <label className="btn-upload" htmlFor="product-img-input" role="tabpanel" tabIndex="0">
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
          <input id="product-img-input" type="file" />
        </label>
      </article>
      <Input
        inputId="product-name"
        label="상품명"
        minLength="2"
        maxLength="15"
        placeholder="2~15자 이내여야 합니다."
        required
        onBlur={e => validateName(e.target.value)}
        errorText={nameErrorMsg}
        // initialValue={data.product.name}
      />

      <Input
        type="number"
        inputId="product-price"
        label="가격"
        min="0"
        max="1000000000"
        placeholder="숫자만 입력 가능합니다."
        required
        onBlur={e => validatePrice(e.target.value)}
        errorText={priceErrorMsg}
        // initialValue={data.product.price}
      />

      <Input
        type="url"
        inputId="purchase-link"
        label="판매 링크"
        placeholder="URL을 입력해 주세요"
        required
        onBlur={e => validateLink(e.target.value)}
        errorText={linkErrorMsg}
        // initialValue={data.product.link}
      />
    </form>
  );
}
