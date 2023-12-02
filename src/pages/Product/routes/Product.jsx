import React, { useState, useEffect } from 'react';
import '../styles/Product.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';
import { getProductAPI } from '../api';
import SkeletonProduct from '../components/SkeletonProduct';
// productId=652b7f9db2cb2056637a0daf

export default function Product() {
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

  if (isLoading) return <SkeletonProduct />;

  return (
    <>
      <Header page="upload" btnDisabled={!isOnSubmit} btnText={btnText} formName="form-product" />
      <main className="main-product">
        <h1 className="title">상품 등록</h1>
        <ProductForm setIsOnSubmit={setIsOnSubmit} initialData={data} />
      </main>
    </>
  );
}
