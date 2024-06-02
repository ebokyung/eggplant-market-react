import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getImageWithTheme } from '../../../../utils/imageUrlProcess';
import Modal from '../../../../components/Element/Modal/Modal';
import { deleteProductAPI } from '../../api';
import { useLazyLoad } from '../../../../hooks/useLazyLoad';
import { themeAtom } from '../../../../recoil/theme/atoms';

// Todo : lazy 관련 리팩토링시에 customhook 분리
export function ProductItem({ item }) {
  const theme = useRecoilValue(themeAtom);
  const imgRef = useRef();
  useLazyLoad(imgRef);
  const { id, itemImage, itemName, price } = item;
  const [isModal, setIsModal] = useState(false);
  const navigate = useNavigate();

  const src = getImageWithTheme({ img: itemImage, type: 'post', theme });

  const handleModal = () => {
    setIsModal(prev => !prev);
  };

  const handleDelete = async () => {
    const res = await deleteProductAPI(id);
    if (res.status === '200') {
      window.location.reload();
    }
  };

  const handleUpdate = () => {
    navigate(`/product?productId=${id}`);
  };

  const options = [
    { text: '삭제', func: handleDelete, openAlert: true },
    { text: '수정', func: handleUpdate },
    {
      text: '웹사이트에서 상품 보기',
      func: () => {
        alert('서비스 준비 중입니다.');
      },
    },
  ];

  return (
    <>
      <button className="product" data-product-id={id} type="button" onClick={() => handleModal()}>
        <strong className="product-name">{itemName}</strong>
        <img className="product-img" data-src={src} alt="" ref={imgRef} />
        <strong className="product-price">
          <span className="price">{Number(price).toLocaleString()}</span>원
        </strong>
      </button>
      {isModal && <Modal options={options} closeModal={handleModal} />}
    </>
  );
}
