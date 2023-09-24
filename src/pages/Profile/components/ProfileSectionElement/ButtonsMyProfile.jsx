import React from 'react';
import { Link } from 'react-router-dom';

export function ButtonsMyProfile() {
  return (
    <div className="btn-wrap-my">
      <Link className="btn-link profile-modification" to="/profile-modification">
        프로필 수정
      </Link>
      <Link className="btn-link add-product" to="/product-upload">
        상품 등록
      </Link>
    </div>
  );
}
