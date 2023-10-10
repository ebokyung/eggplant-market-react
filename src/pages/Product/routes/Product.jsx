import React, { useState, useEffect } from 'react';
import '../styles/Product.scss';
import { useLocation } from 'react-router-dom';
import Header from '../../../components/Element/Header/Header';
import { ProductForm } from '../components/ProductForm';
import { getProductAPI } from '../api';
// productId=652507cbb2cb205663776e2c

export function Product() {
  const location = useLocation();
  const productId = location.search;
  const btnText = productId ? '수정' : '업로드';
  const [isOnSubmit, setIsOnSubmit] = useState(!!productId);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    itemImage: '',
    itemName: '',
    price: '',
    link: '',
  });

  useEffect(() => {
    if (productId) {
      const getData = async () => {
        const res = await getProductAPI(new URLSearchParams(location.search).get('productId'));
        const { itemImage, itemName, price, link } = res.product;
        setData({ itemImage, itemName, price, link });
        setLoading(() => false);
      };
      getData();
    } else {
      setLoading(() => false);
    }
  }, []);

  return loading ? (
    <h1>loading...</h1>
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
