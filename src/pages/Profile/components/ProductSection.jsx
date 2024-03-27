import React from 'react';
import '../styles/ProductSection.scss';
import { ProductItem } from './ProductSectionElement/ProductItem';

export function ProductSection({ data }) {
  return (
    <section id="product" className="product-container">
      <h2>판매 중인 상품</h2>
      <ul className="product-list">
        {data.length ? (
          data.map(item => {
            return (
              <li key={item.id} className="product-item">
                <ProductItem item={item} />
              </li>
            );
          })
        ) : (
          <div className="null-text">판매 중인 상품이 없어요.</div>
        )}
      </ul>
    </section>
  );
}
