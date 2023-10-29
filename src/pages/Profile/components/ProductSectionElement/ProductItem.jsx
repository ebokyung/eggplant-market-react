import React from 'react';
import { checkImageUrl } from '../../../../utils/imageUrlProcess';

export function ProductItem({ item }) {
  const { id, itemImage, itemName, price } = item;
  return (
    <button className="product" data-product-id={id} type="button">
      <strong className="product-name">{itemName}</strong>
      <img className="product-img" src={checkImageUrl(itemImage, 'post')} alt="" />
      <strong className="product-price">
        <span className="price">{Number(price).toLocaleString()}</span>원
      </strong>
    </button>
  );
}
