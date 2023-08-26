import React from 'react';
import './Input.scss';

function Input(props) {
  const { inputId, label, type, hasError, placeholder, required } = props;

  return (
    <>
      <label htmlFor={inputId}>{label}</label>
      <input type={type || 'text'} className={hasError && 'error'} placeholder={placeholder} required={required} {...props} />
    </>
  );
}

export default Input;
