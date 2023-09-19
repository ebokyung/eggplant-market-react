import React, { useState } from 'react';
import './Input.scss';

export function Input(props) {
  const { inputId, label, type, placeholder, required, errorText, initialValue, ...other } = props;
  const [inpValue, setInpValue] = useState(initialValue || '');

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
        {...other}
      />
      {errorText && <strong className="error-msg">*{errorText}</strong>}
    </fieldset>
  );
}
