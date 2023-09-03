import React from 'react';
import { ProductItem } from './ProductSection/ProductItem';

export function ProductSection() {
  return (
    <section id="product" className="product-container">
      <h2>판매 중인 상품</h2>
      <ul className="product-list">
        <li>
          <ProductItem />
        </li>
      </ul>
    </section>
  );
}
