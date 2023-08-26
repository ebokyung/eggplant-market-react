/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { createPortal } from 'react-dom';
import ButtonCancel from './ButtonCancel';
import './Popup.scss';

// target : 게시글, 상품, 댓글, 로그아웃
// role : report, delete, logout
/*
게시글 -> 삭제 (내 게시글), 신고 (다른 사람 게시글)
상품 -> 삭제
댓글 -> 삭제 (내 댓글), 신고 (다른 사람 댓글)
로그아웃 -> 헤더
 */

const targetMap = {
  post: '게시글',
  comment: '댓글',
  product: '상품',
};

const actionMap = {
  delete: '삭제',
  report: '신고',
  logout: '로그아웃',
};

function Popup({ onClose, target, action }) {
  const currAction = actionMap[action];
  const descriptionText = action === 'logout' ? '로그아웃하시겠어요?' : `${targetMap[target]}을 ${currAction}할까요?`;
  return createPortal(
    <div
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === 'ESC') onClose();
      }}
      className="modal-background"
    >
      <h2 className="a11y-hidden">팝업</h2>
      <div className="modal-content">
        <p className="modal-description">{descriptionText}?</p>
        <div className="modal-actions">
          <button type="button">{currAction}</button>
          <ButtonCancel onClose={onClose} />
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default Popup;
