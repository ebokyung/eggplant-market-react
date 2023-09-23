import React, { useState } from 'react';
import './Input.scss';

export function Input(props) {
  const { name, inputId, label, type, placeholder, required, error, initialValue, ...other } = props;
  const [inpValue, setInpValue] = useState(initialValue);
  const { isError, errorText } = error;

  return (
    <fieldset className="fieldset">
      <label htmlFor={inputId}>{label}</label>
      <input
        name={name}
        type={type || 'text'}
        id={inputId}
        className={isError && errorText ? 'error' : null}
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
