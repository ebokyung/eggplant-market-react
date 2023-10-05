import React, { useState, useEffect } from 'react';
import '../styles/Product.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';
import { singleProduct } from '../../../libs/dummy';

export function Product() {
  const location = useLocation();
  const btnText = location.pathname.includes('upload') ? '업로드' : '수정';
  const [isOnSubmit, setIsOnSubmit] = useState(location.pathname.includes('modify'));

  const [data, setData] = useState({
    itemImage: '',
    itemName: '',
    price: '',
    link: '',
  });

  useEffect(() => {
    // 수정 페이지일때
    if (isOnSubmit) {
      // postId에 따라 get 요청
      const { itemImage, itemName, price, link } = singleProduct.product;
      setData({ itemImage, itemName, price, link });
    }
  }, []);

  // 임시 loading 상태 관리
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (isOnSubmit) {
      if (data.itemName) setLoading(() => false);
    } else {
      setLoading(() => false);
    }
  }, [data]);

  return loading ? (
    console.log('loading...')
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
