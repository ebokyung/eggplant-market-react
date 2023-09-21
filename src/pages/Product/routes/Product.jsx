import React, { useState } from 'react';
import '../styles/Product.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';

export function Product() {
  const location = useLocation();
  const btnText = location.pathname.includes('upload') ? '업로드' : '수정';
  const [isOnSubmit, setIsOnSubmit] = useState(location.pathname.includes('modify'));

  return (
    <>
      <Header page="upload" disabled={!isOnSubmit} btnText={btnText} formName="form-product" />
      <main className="upload">
        <h1 className="title">상품 등록</h1>
        <ProductForm isOnSubmit={isOnSubmit} setIsOnSubmit={setIsOnSubmit} />
      </main>
    </>
  );
}
