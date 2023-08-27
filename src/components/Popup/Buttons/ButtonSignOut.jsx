/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

const ButtonSignOut = React.forwardRef((props, ref) => {
  return (
    <button ref={ref} type="button">
      로그아웃
    </button>
  );
});

export default ButtonSignOut;
