import React, { useState, useEffect } from 'react';
import '../styles/Product.scss';
import { useLocation } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';
import { getProductAPI } from '../api';
import Fieldset from '../../../components/Skeleton/Fieldset';
import { Meta } from '../../../libs/Meta';

export function Product() {
  const location = useLocation();
  const hasProductId = !!location.search;
  const btnText = hasProductId ? '수정' : '업로드';
  const [isOnSubmit, setIsOnSubmit] = useState(hasProductId);

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({
    itemImage: '',
    itemName: '',
    price: '',
    link: '',
  });

  useEffect(() => {
    if (hasProductId) {
      (async () => {
        const res = await getProductAPI(new URLSearchParams(location.search).get('productId'));
        const { itemImage, itemName, price, link } = res.product;
        setData({ itemImage, itemName, price, link });
        setIsLoading(() => false);
      })();
    } else {
      setIsLoading(() => false);
    }
  }, []);

  return isLoading ? (
    <>
      <Meta title="상품 등록" />
      <Header page="upload">
        <Skeleton width={90} height={30} />
      </Header>
      <main className="main-product">
        <div className="title">
          <Skeleton width={80} />
        </div>
        <div className="formProduct">
          <Skeleton className="product-img-cover" />
          <Fieldset />
          <Fieldset />
          <Fieldset />
        </div>
      </main>
    </>
  ) : (
    <>
      <Header page="upload" btnDisabled={!isOnSubmit} btnText={btnText} formName="form-product" />
      <main className="main-product">
        <h1 className="title">상품 등록</h1>
        <ProductForm setIsOnSubmit={setIsOnSubmit} initialData={data} />
      </main>
    </>
  );
}
