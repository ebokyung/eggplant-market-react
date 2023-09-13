import React from 'react';
import './ErrorMsg.scss';

export function ErrorMsg({ errorText }) {
  return <strong className="error-msg">*{errorText}</strong>;
}
