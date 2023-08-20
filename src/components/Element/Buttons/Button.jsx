import React from 'react';
import './style/MainButton.scss';

function Button({ children, ...props }) {
  // eslint-disable-next-line react/button-has-type, react/jsx-props-no-spreading
  return <button {...props}>{children}</button>;
}

export default Button;
