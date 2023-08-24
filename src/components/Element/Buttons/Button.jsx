import React from 'react';
import './style/MainButton.scss';

function Button({ children, ...props }) {
  return (
    // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
    <button type="button" {...props}>
      {children}
    </button>
  );
}

export default Button;
