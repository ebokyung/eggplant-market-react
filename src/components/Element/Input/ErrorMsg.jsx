import React from 'react';
import './ErrorMsg.scss';

function ErrorMsg({ errorText }) {
  return <strong className="error-msg">*{errorText}</strong>;
}

export default ErrorMsg;
