import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Input } from '../../../components/Element/Input';
import { InputProductImage } from './InputProductImage';
import { postProductAPI, putProductAPI } from '../api';
import { postImageAPI } from '../../../libs/api/PostImage';

export function ProductForm({ setIsOnSubmit, initialData }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isUploadPage = !location.search;
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
    setIsBtnDisabled(nameError.isError || priceError.isError || linkError.isError);
  }, [nameError, priceError, linkError]);

  useEffect(() => {
    setIsOnSubmit(!isBtnDisabled);
  }, [isBtnDisabled]);

  const handleSubmit = async e => {
    e.preventDefault();
    const { productImg, productName, productPrice, productLink } = formRef.current.elements;

    let productImgUrl = initialData?.itemImage;
    if (productImg.files[0]) {
      productImgUrl = await postImageAPI(productImg.files[0]);
    }

    const data = {
      product: {
        itemName: productName.value,
        /* eslint "radix": ["error", "as-needed"] */
        price: parseInt(productPrice.value),
        link: productLink.value,
        itemImage: productImgUrl,
      },
    };

    let result;
    if (isUploadPage) result = await postProductAPI(data);
    else result = await putProductAPI(new URLSearchParams(location.search).get('productId'), data);

    if (result.status === 200) {
      navigate('/profile'); // 수정
    }
  };

  return (
    <form onSubmit={handleSubmit} id="form-product" className="formProduct" ref={formRef}>
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
