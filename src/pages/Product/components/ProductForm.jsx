import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Input } from '../../../components/Element/Input';
import { InputProductImage } from './InputProductImage';

export function ProductForm({ setIsOnSubmit, initialData }) {
  const isUploadPage = useLocation().pathname.includes('product-upload');
  const [isBtnDisabled, setIsBtnDisabled] = useState(isUploadPage);
  const formRef = useRef();
  const [nameError, setNameError] = useState({
    isError: isUploadPage,
    errorText: '',
  });
  const [priceError, setPriceError] = useState({
    isError: isUploadPage,
    errorText: '',
  });
  const [linkError, setLinkError] = useState({
    isError: isUploadPage,
    errorText: '',
  });

  const validateName = name => {
    const valid = name.validity;
    if (valid.valueMissing || valid.tooShort) {
      setNameError({
        isError: true,
        errorText: '2~15자 이내여야 합니다.',
      });
    } else {
      setNameError({
        isError: false,
        errorText: '',
      });
    }
  };

  const validatePrice = price => {
    const valid = price.validity;
    if (valid.valueMissing || valid.rangeOverflow) {
      setPriceError({ isError: true, errorText: '0~1000000000 숫자를 입력해 주세요.' });
    } else {
      setPriceError({ isError: false, errorText: '' });
    }
  };

  const validateLink = link => {
    const valid = link.validity;
    const urlPattern = /^(https?:\/\/)?(www\.)+([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/;
    if (valid.valueMissing || !urlPattern.test(link.value)) {
      setLinkError({ isError: true, errorText: 'URL 형식으로 입력해 주세요.' });
    } else {
      setLinkError({ isError: false, errorText: '' });
    }
  };

  useEffect(() => {
    setIsBtnDisabled(!(!nameError.isError && !priceError.isError && !linkError.isError));
  }, [nameError, priceError, linkError]);

  useEffect(() => {
    setIsOnSubmit(!isBtnDisabled);
  }, [isBtnDisabled]);

  const handleSubmit = e => {
    e.preventDefault();
    const { productImg, productName, productPrice, productLink } = formRef.current.elements;
    // post 요청
    alert(
      JSON.stringify({
        // todo : 이미지 분기 처리 (input의 fileName[0] 있으면 그거, 없고 modify면 그대로)
        itemImage: productImg.style.backgroundImage.slice(5, -2),
        itemName: productName.value,
        price: productPrice.value,
        link: productLink.value,
      }),
    );
  };

  return (
    <form onSubmit={handleSubmit} id="form-product" ref={formRef}>
      <InputProductImage initialValue={initialData?.itemImage} />
      <Input
        inputId="product-name"
        name="productName"
        label="상품명"
        minLength="2"
        maxLength="15"
        placeholder="2~15자 이내여야 합니다."
        required
        onBlur={e => validateName(e.target)}
        error={nameError}
        initialValue={initialData?.itemName}
      />

      <Input
        type="number"
        inputId="product-price"
        name="productPrice"
        label="가격"
        min="0"
        max="1000000000"
        maxLength="10"
        placeholder="숫자만 입력 가능합니다."
        required
        onBlur={e => validatePrice(e.target)}
        error={priceError}
        initialValue={initialData?.price}
      />

      <Input
        type="url"
        inputId="purchase-link"
        name="productLink"
        label="판매 링크"
        placeholder="URL을 입력해 주세요"
        required
        onBlur={e => validateLink(e.target)}
        error={linkError}
        initialValue={initialData?.link}
      />
    </form>
  );
}
