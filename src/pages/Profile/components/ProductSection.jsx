import React from 'react';
import '../styles/ProductSection.scss';
import { ProductItem } from './ProductSectionElement/ProductItem';

export function ProductSection({ fetchData }) {
  const userProduct = fetchData.read().product;

  return (
    <section id="product" className="product-container">
      <h2>판매 중인 상품</h2>
      <ul className="product-list">
        {userProduct.map(item => {
          return (
            <li key={item.id} className="product-item">
              <ProductItem item={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
