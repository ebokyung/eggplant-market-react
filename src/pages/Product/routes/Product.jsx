import React from 'react';
import '../styles/Product.scss';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';

export function Product() {
  return (
    <>
      <Header page="upload" />
      <main className="upload">
        <h1 className="title">상품 등록</h1>
        <ProductForm />
      </main>
    </>
  );
}
