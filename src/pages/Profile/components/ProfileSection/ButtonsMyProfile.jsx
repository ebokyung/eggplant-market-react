import React from 'react';

export function ButtonsMyProfile() {
  return (
    <div className="btn-wrap-my">
      <button className="btn-link profile-modification" type="button" onClick="location.href = './profile_modification.html'">
        프로필 수정
      </button>
      <button className="btn-link add-product" type="button" onClick="location.href = './product_upload.html'">
        상품 등록
      </button>
    </div>
  );
}
