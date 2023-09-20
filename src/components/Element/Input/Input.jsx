import React, { useState, forwardRef } from 'react';
import './Input.scss';

export const Input = forwardRef((props, ref) => {
  const { inputId, label, type, placeholder, required, errorText, ...other } = props;
  const [inpValue, setInpValue] = useState('');

  return (
    <fieldset className="fieldset">
      <label htmlFor={inputId}>{label}</label>
      <input
        type={type || 'text'}
        id={inputId}
        className={errorText ? 'error' : null}
        placeholder={placeholder}
        required={required}
        onChange={e => setInpValue(e.target.value)}
        value={inpValue}
        ref={ref}
        {...other}
      />
      {errorText && <strong className="error-msg">*{errorText}</strong>}
    </fieldset>
  );
});
