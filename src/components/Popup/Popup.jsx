/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useRef } from 'react';
import './Popup.scss';
import { ButtonCancel, ButtonDelete, ButtonReport, ButtonSignOut } from './Buttons';

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

const actionComponentMap = {
  로그아웃: ButtonSignOut,
  신고: ButtonReport,
  삭제: ButtonDelete,
};

function Popup({ onClose, target, action, commentId, productId, postId }) {
  const currAction = actionMap[action];
  const descriptionText = action === 'logout' ? '로그아웃하시겠어요?' : `${targetMap[target]}을 ${currAction}할까요?`;
  const ActionComponent = actionComponentMap[currAction];

  const actionButtonRef = useRef(null);

  useEffect(() => {
    if (actionButtonRef.current) {
      actionButtonRef.current.focus();
    }
  }, []);

  const handleKeyDown = e => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      onClick={() => {
        onClose();
      }}
      className="modal-background"
    >
      <h2 className="a11y-hidden">팝업</h2>
      <div className="modal-content" onClick={e => e.stopPropagation()} onKeyDown={handleKeyDown}>
        <p className="modal-description">{descriptionText}?</p>
        <div className="modal-actions">
          {ActionComponent && <ActionComponent postId={postId} productid={productId} commentId={commentId} ref={actionButtonRef} />}
          <ButtonCancel onClose={onClose} />
        </div>
      </div>
    </div>
  );
}

export default Popup;
