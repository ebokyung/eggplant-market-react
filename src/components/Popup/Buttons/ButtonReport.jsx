/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const ButtonReport = React.forwardRef(({ postId, commentId }, ref) => {
  return (
    <button ref={ref} type="button">
      신고
    </button>
  );
});

export default ButtonReport;
