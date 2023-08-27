/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const ButtonDelete = React.forwardRef(({ postId, productId, commentId }, ref) => {
  return (
    <button ref={ref} type="button">
      삭제
    </button>
  );
});

export default ButtonDelete;
