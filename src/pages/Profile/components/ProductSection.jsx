import React from 'react';
import '../styles/ProductSection.scss';
import { useRecoilValue } from 'recoil';
import { ProductItem } from './ProductSectionElement/ProductItem';
import { userProductState } from '../recoils/selector';

export function ProductSection({ accountname }) {
  const userProduct = useRecoilValue(userProductState(accountname));

  return (
    <section id="product" className="product-container">
      <h2>판매 중인 상품</h2>
      <ul className="product-list">
        {userProduct.length ? (
          userProduct.map(item => {
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
