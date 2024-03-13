import React, { useEffect, useState } from 'react';
import '../styles/ProductSection.scss';
import { ProductItem } from './ProductSectionElement/ProductItem';
import { getProductAPI } from '../api';

export function ProductSection({ accountname }) {
  const [userProduct, setUserProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const userProductData = await getProductAPI(accountname);
      setUserProduct(() => userProductData.product);
      setIsLoading(false);
    })();
  }, [accountname]);

  if (isLoading) return 'loading products ...';

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
