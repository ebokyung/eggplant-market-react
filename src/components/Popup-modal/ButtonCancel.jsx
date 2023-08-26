import React from 'react';

function ButtonCancel({ onClose }) {
  return (
    <button
      type="button"
      onClick={onClose}
      onKeyDown={e => {
        if (e.key === 'Enter') onClose();
      }}
    >
      취소
    </button>
  );
}

export default ButtonCancel;
